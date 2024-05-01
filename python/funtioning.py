import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import threading
import queue
import requests
import io

class ImageProcessor(threading.Thread):
    def __init__(self, image_link, model, results_queue):
        super().__init__()
        self.image_link = image_link
        self.model = model
        self.results_queue = results_queue

    def run(self):
        try:
            response = requests.get(self.image_link)
            if response.status_code == 200:
                img = image.load_img(io.BytesIO(response.content), target_size=(128, 128))
                img_array = image.img_to_array(img)
                img_array = np.expand_dims(img_array, axis=0) / 255.0
                pred_result = self.model.predict(img_array)
                self.results_queue.put((self.image_link, pred_result))
            else:
                print(f"Failed to fetch image: {self.image_link}")
        except Exception as e:
            print(f"Error processing image {self.image_link}: {str(e)}")

def check_obscene(image_links):
    model = tf.keras.models.load_model("big_database")
    results_queue = queue.Queue()
    threads = []

    for link in image_links:
        thread = ImageProcessor(link, model, results_queue)
        thread.start()
        threads.append(thread)

    for thread in threads:
        thread.join()

    obscenelinks = []
    while not results_queue.empty():
        link, pred_result = results_queue.get()
        print(pred_result, link)
        if pred_result > 0.85:
            print(link, "obscene")
            obscenelinks.append(link)
        else:
            print(link, "not obscene")

    return obscenelinks

# Example usage:
# obscenelinks = check_obscene(["https://example.com/image1.jpg", "https://example.com/image2.jpg"])
