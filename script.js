document.addEventListener("DOMContentLoaded", function() {
var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "Your not in the right place! get out";
console.log("raaaahhhhh")
});
// 3. Define the function to run on click
function changeText() {
    const paragraph = document.getElementById('demo');
    paragraph.textContent = 'welldone';
    welcomeMessage.textContent = "You pressed the button!";
}

// 4. Select the button and add an event listener
const button = document.getElementById('myButton');
button.addEventListener('click', changeText);