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
