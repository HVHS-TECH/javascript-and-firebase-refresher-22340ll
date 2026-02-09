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
firebase.initializeApp(firebaseConfig);

// Function to write data on button click
function writeData() { 
    const inputElement = document.getElementById('dataInput');
    const value = inputElement.value;

    if (value.trim() === '') {
        alert('Please enter data');
        return;
    }

    // Get a reference to the database service
    const database = firebase.database();
    
    // Push data to a new unique key under a 'messages' node
    database.ref('messages').push({
        content: value,
        timestamp: Date.now()
    }).then(() => {
        alert("Data successfully written!");
        inputElement.value = ''; // Clear input field
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });   
}

// Attach writeData to button click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', writeData);
});