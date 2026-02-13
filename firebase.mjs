
// Import the functions you need from the SDKs you need
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { signOut}
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, set }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { get}
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { update }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase mjs SDK v7.20.0 and later, measurementId is optional
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
const database = getDatabase(app);

// Fixed writeData function - using the imported database, not firebase.database()
function writeData() { 
    const inputElement = document.getElementById('dataInput');
    const value = inputElement.value;

    if (value.trim() === '') {
        alert('Please enter data');
        return;
    }

    // Push data to a new unique key under a 'messages' node
    // Using the 'database' constant we defined above, not firebase.database()
    const messagesRef = ref(database, 'messages');
    push(messagesRef, {
        content: value,
        timestamp: Date.now()
    }).then(() => {
        alert("Data successfully written!");
        inputElement.value = ''; // Clear input field
    }).catch((error) => {
        console.error("Error writing document: ", error);
        alert("Error writing data: " + error.message);
    });   
}

// Function to write user data
function writeUserData(userId, name, email) {
    const dbRef = ref(database, 'users/' + userId);
    set(dbRef, {
        username: name,
        email: email
    })
    .then(() => {
        console.log("Data saved successfully!");
    })
    .catch((error) => {
        console.error("Data could not be saved: " + error);
    });
}

// Function to read user data in real-time
function readUserData(userId) {
    const dbRef = ref(database, 'users/' + userId);
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            console.log("Current username: " + data.username);
            console.log("Current email: " + data.email);
        } else {
            console.log("No data available for this user.");
        }
    }, {
        onlyOnce: false // Set to true if you only want to read once
    });
}

// Attach writeData to button click when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', writeData);
    }
});

export {
    writeData,
    writeUserData,
    readUserData,
    database, 
};

