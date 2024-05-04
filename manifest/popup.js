// contentScript.js
// let currentUrl = window.location.href;

// // Send the URL to your server via XMLHttpRequest or Fetch API
// let xhr = new XMLHttpRequest();
// xhr.open('POST', 'http://localhost:5000/data');
// xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     let data = JSON.parse(xhr.responseText);
//     console.log('Data retrieved:', data);
//     localStorage.setItem("Obscene",data)
//     console.log(localStorage.getItem("Obscene"))
//     // Process the data as needed
//   }
// };
// xhr.send(JSON.stringify({url: currentUrl}));
