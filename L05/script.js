const themeButton = document.getElementById("theme-btn");
const contactButton = document.getElementById("contact-btn");
const dateSpan = document.getElementById("last-updated");

let isDarkMode = localStorage.getItem("portfolio_theme") === "dark";

function applyTheme() {
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "Toggle Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        themeButton.textContent = "Toggle Dark Mode";
    }
}

applyTheme();

themeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("portfolio_theme", isDarkMode ? "dark" : "light");
    applyTheme(); 
});

contactButton.addEventListener("click", () => {
    alert("You can reach me at: regan.dangol@example.com\nLinkedIn: linkedin.com/in/ShiroiYuki111");
});

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const day = String(today.getDate()).padStart(2, '0');

dateSpan.textContent = `${year}-${month}-${day}`;
