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

const loadDataBtn = document.getElementById("load-data-btn");
const apiResultContainer = document.getElementById("api-result-container");

loadDataBtn.addEventListener("click", async () => {
    apiResultContainer.style.display = "block";
    apiResultContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        apiResultContainer.innerHTML = `
            <h3 style="margin-top: 0; margin-bottom: 10px;">User Profile Fetched:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 5px 0;"><strong>Company:</strong> ${data.company.name}</p>
        `;
        
    } catch (error) {
        console.error("Failed to fetch data:", error);
        apiResultContainer.innerHTML = "<p style='color: #d9534f; font-weight: bold;'>Error loading data</p>";
    }
});
