async function fetchClimateHistory() {
    const location = document.getElementById('location').value;
    if (location.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    const climateHistoryUrl = `https://api.example.com/climate-history?location=${location}`; // Replace with your actual API endpoint

    try {
        const response = await fetch(climateHistoryUrl);
        if (!response.ok) {
            throw new Error('Climate history data not found');
        }
        const climateHistoryData = await response.json();
        displayClimateHistory(climateHistoryData);
    } catch (error) {
        console.error('Error fetching climate history data:', error);
        alert('Error fetching climate history data. Please try again.');
    }
}

function displayClimateHistory(data) {
    const climateHistoryDiv = document.getElementById('climateHistoryData');
    const climateHistoryHtml = `
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Temperature History:</strong> ${data.temperatureHistory}</p>
        <p><strong>Precipitation History:</strong> ${data.precipitationHistory}</p>
        <p><strong>Weather Patterns:</strong> ${data.weatherPatterns}</p>
    `;
    climateHistoryDiv.innerHTML = climateHistoryHtml;
}

// Display current date and time in the footer
function updateTime() {
    const currentTime = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = currentTime.toLocaleString('en-US', options);
    document.getElementById('current-time').innerText = `Current Date & Time: ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initialize immediately
