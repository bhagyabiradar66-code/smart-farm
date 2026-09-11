let pumpOn = false;

function togglePump() {
    pumpOn = !pumpOn;

    const pump = document.getElementById("pump");
    const button = document.querySelector("button");

    if (pumpOn) {
        pump.textContent = "ON";
        button.textContent = "Turn Pump OFF";
    } else {
        pump.textContent = "OFF";
        button.textContent = "Turn Pump ON";
    }
}

// Simulate changing sensor values
function updateSensors() {
    const temperature = Math.floor(Math.random() * 8) + 25;
    const moisture = Math.floor(Math.random() * 30) + 50;
    const light = Math.floor(Math.random() * 25) + 65;

    document.getElementById("temperature").textContent =
        temperature + "°C";

    document.getElementById("moisture").textContent =
        moisture + "%";

    document.getElementById("light").textContent =
        light + "%";

    const cropStatus = document.getElementById("cropStatus");

    if (moisture < 55) {
        cropStatus.textContent =
            "⚠️ Soil moisture is low. Consider turning ON the water pump.";
    } else {
        cropStatus.textContent =
            "🌱 Crop conditions are healthy.";
    }
}

// Update sensor values every 5 seconds
setInterval(updateSensors, 5000);
