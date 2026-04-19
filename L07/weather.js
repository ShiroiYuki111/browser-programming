const cityText = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const windText = document.getElementById("wind");
const output = document.getElementById("output");

// Helper function to log messages to the <pre> block
function log(message) {
    output.textContent += message + "\n";
}

// Helper function to clear previous logs
function clearOutput() {
    output.textContent = "";
}

// Button Click Event for Kuopio
document.getElementById("btnKuopio").onclick = function () {
    loadWeatherByCity("Kuopio", 62.8924, 27.6770);
};

// Button Click Event for Helsinki (Bonus City)
document.getElementById("btnHelsinki").onclick = function () {
    loadWeatherByCity("Helsinki", 60.1695, 24.9354);
};

// Main Fetch Function
async function loadWeatherByCity(cityName, latitude, longitude) {
    clearOutput();
    log("Fetching data for " + cityName + "...");

    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=" +
            latitude +
            "&longitude=" +
            longitude +
            "&current=temperature_2m,wind_speed_10m";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        const temperature = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;

        // Update the DOM
        cityText.textContent = cityName;
        temperatureText.textContent = temperature + " °C";
        windText.textContent = wind + " km/h";

        // Log the success
        log("Success!");
        log("City: " + cityName);
        log("Temperature: " + temperature + " °C");
        log("Wind Speed: " + wind + " km/h");

    } catch (error) {
        log("Error: " + error.message);
    }
}
