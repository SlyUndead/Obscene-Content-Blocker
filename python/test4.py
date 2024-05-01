import os
import requests
from bs4 import BeautifulSoup
from funtioning import check_obscene

def extract_image_urls(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        image_tags = soup.find_all('img')
        image_urls = [tag['src'] for tag in image_tags if 'src' in tag.attrs]
        return image_urls
    else:
        print(f"Failed to fetch page: {response.status_code}")
        return []

def download(url):
    image_urls = extract_image_urls(url)
    if image_urls:
        obscene_links = check_obscene(image_urls)
        return obscene_links
    else:
        print("No image URLs found on the page.")
        return []

# Example usage:
# obscene_links = check_obscene_images('https://example.com')
