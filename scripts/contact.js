// Example data fetching function
async function showWeather() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Lagos');
        const data = await response.json();
        document.getElementById('weather-info').innerText = `Current temperature in ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}.`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerText = 'Unable to fetch weather data at the moment.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial page load tasks, if any
});

// Display current date and time in the footer
function updateTime() {
    const currentTime = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = currentTime.toLocaleString('en-US', options);
    document.getElementById('current-time').innerText = `Current Date & Time: ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initialize immediately
