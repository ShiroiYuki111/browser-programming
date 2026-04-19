// 1. Console + Variables (Requirement: at least 3 logs, 2 variables)
console.log("Portfolio page successfully loaded."); // Log 1

const themeButton = document.getElementById("theme-btn"); // Variable 1
const contactButton = document.getElementById("contact-btn"); // Variable 2

// 2. State (Requirement: 1 state variable)
let isDarkMode = false; // Tracks the current theme state

// 3. Functions (Requirement: at least 2 functions)

// Function 1: Feature A (Theme Toggle)
function toggleTheme() {
    // Toggle the CSS class on the body
    document.body.classList.toggle("dark-mode");
    
    // Update the state variable
    isDarkMode = !isDarkMode;
    
    // Update button text
    if (isDarkMode) {
        themeButton.textContent = "Toggle Light Mode";
        console.log("State changed: Dark mode enabled."); // Log 2
    } else {
        themeButton.textContent = "Toggle Dark Mode";
        console.log("State changed: Light mode enabled.");
    }
}

// Function 2: Feature C (Portfolio Contact Quick Action)
function showContactInfo() {
    console.log("User clicked the quick contact button."); // Log 3
    alert("You can reach me at: regan.dangol@example.com\nLinkedIn: linkedin.com/in/yourprofile");
}

// 4. Events (Requirement: at least 2 event handlers)
themeButton.addEventListener("click", toggleTheme);
contactButton.addEventListener("click", showContactInfo);
