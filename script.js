// Write a for loop in javascript

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// When the button is clicked, console.log subscriube to the channel    
// Path: script.js

// script.js

// Get a reference to the button element by its ID
const subscribeButton = document.getElementById("subscribe-button");

// Add a click event listener to the button
subscribeButton.addEventListener("click", () => {
    alert("Subscribe"); // This line will log "Subscribe" to the console when the button is clicked
});

