// Get the welcome message element
const welcomeMessage = document.getElementById("welcome-message");

// Define your welcome message and animation
const messageText = "Welcome To TAKA Trucker Official Website";
const animationDelay = 100; // Delay in milliseconds between characters

let charIndex = 0;

function animateWelcomeMessage() {
    if (charIndex < messageText.length) {
        // Add the next character to the message element
        welcomeMessage.textContent += messageText.charAt(charIndex);
        charIndex++;

        // Call this function recursively after a delay
        setTimeout(animateWelcomeMessage, animationDelay);
    }
}

// Start the animation when the page loads
window.addEventListener("load", animateWelcomeMessage);
