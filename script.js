document.addEventListener("DOMContentLoaded", function() {
    var messageSpace = document.getElementById("welcomeMessage");
    messageSpace.innerHTML = "Your not in the right place! get out";
    console.log("raaaahhhhh")
});
//Javascript
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyB_CnBPy37yHOG3tgT9IHAKsyx3KMOKXfU",
  authDomain: "uuuuhhhhhh-34d89.firebaseapp.com",
  databaseURL: "https://uuuuhhhhhh-34d89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uuuuhhhhhh-34d89",
  storageBucket: "uuuuhhhhhh-34d89.firebasestorage.app",
  messagingSenderId: "198705171993",
  appId: "1:198705171993:web:6b0029a02834c9fb59e488",
  measurementId: "G-2KSDSKRWG7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// 3. Define the function to run on click
function changeText() {
    const paragraph = document.getElementById('demo');
    paragraph.textContent = 'welldone';
    welcomeMessage.textContent = "You pressed the button!";
}

// 4. Select the button and add an event listener
    const button = document.getElementById('myButton');
    button.addEventListener('click', changeText);

