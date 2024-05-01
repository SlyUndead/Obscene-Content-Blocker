let currentUrl = window.location.href;
console.log(currentUrl);

// Save the original overflow value
let originalOverflow = document.body.style.overflow;

// Create a container for the overlay
let overlayContainer = document.createElement('div');
overlayContainer.id = 'overlay-container';
overlayContainer.style.position = 'fixed';
overlayContainer.style.top = '0';
overlayContainer.style.left = '0';
overlayContainer.style.width = '100%';
overlayContainer.style.height = '100%';
overlayContainer.style.background = 'rgba(255, 255, 255, 0.5)';
overlayContainer.style.zIndex = '9999';
document.body.appendChild(overlayContainer);

// Load the skeleton HTML file into the overlay container
fetch(chrome.runtime.getURL('skeleton.html'))
  .then(response => response.text())
  .then(html => {
    overlayContainer.innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading skeleton HTML:', error);
  });

// Send the XHR request after loading the skeleton HTML
let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:5000/data');
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhr.onload = function() {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    const arr = data;
    console.log('Data retrieved:', arr);
    const images = document.getElementsByTagName('img');
    const images2 = document.getElementsByTagName('a');
    console.log(images);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < images.length; j++) {
        if (images[j].src === arr[i]) {
          images[j].style.filter = 'blur(20px)';
          console.log(images[j].src, arr[i], 'blurred');
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < images2.length; j++) {
        if (images2[j].href === arr[i]) {
          images2[j].style.filter = 'blur(20px)';
          console.log(images2[j].href, arr[i], 'blurred');
        }
      }
    }
  }
  // Scroll to the top of the page, remove the overlay, and restore the original overflow value
  window.scrollTo(0, 0);
  document.body.removeChild(overlayContainer);
  document.body.style.overflow = originalOverflow;
};
// Disable scrolling
document.body.style.overflow = 'hidden';
xhr.send(JSON.stringify({url: currentUrl}));
