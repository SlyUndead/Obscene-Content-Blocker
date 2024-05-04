# SafeView Browser Extension
## Usage

To use SafeView:

1. Download and install the SafeView browser extension.
2. Enable the extension in your browser settings.
3. Browse the internet with confidence, knowing that SafeView is actively filtering explicit and inappropriate content from images on webpages.

## Acknowledgements

SafeView acknowledges the use of advanced machine learning techniques, including convolutional neural networks, for content classification. Additionally, SafeView appreciates the Flask Server for image blurring functionality.

## Installation

To install SafeView:

1. Clone or download the SafeView repository to your local machine.
2. Install the required dependencies.
3. Ensure the Flask server is running.
4. Load the browser extension as per the browser's developer mode instructions.

## Features

1. *Preprocessing*: Images from the dataset undergo preprocessing techniques such as scaling, normalization, and augmentation to improve the model's generalization capability.

2. *Convolutional Neural Network (CNN)*: SafeView utilizes a CNN-based deep learning architecture to categorize photos as suitable or explicit. Convolutional layers extract pertinent elements like color, texture, and form necessary for differentiation.

3. *Training*: The curated dataset is used to train the CNN model. Backpropagation optimizes model parameters iteratively to reduce classification errors and improve accuracy.

4. *Browser Compatibility*: SafeView is compatible with popular browsers such as Chrome and Firefox. The plugin uses JavaScript to capture material from websites and perform real-time picture analysis.

5. *Client-Server Architecture*: SafeView employs a client-side component (browser extension) and a server-side component (Flask server). The extension communicates with the Flask server to utilize the trained CNN model for image classification.

6. *Image Processing*: Upon viewing a webpage, SafeView fetches the URL of all images and uses the integrated CNN model to process and categorize them as acceptable or explicit.

7. *Content Filtering*: SafeView ensures that only suitable material is exposed to the user by selectively blurring or filtering out photos recognized as explicit based on categorization results.
