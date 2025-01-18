// URL to the JSON data for members (replace with actual API endpoint)
const apiUrl = 'chamber/data/Member.json';  // Replace with the actual path to your JSON file

// Function to fetch and display member data
async function fetchMembers() {
    try {
        const response = await fetch(apiUrl);
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Function to display members as cards
function displayMembers(members) {
    const memberContainer = document.getElementById('memberCards');
    memberContainer.innerHTML = ''; // Clear the container before appending new cards

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>Email: ${member.email}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="http://${member.website}" target="_blank">${member.website}</a></p>
        `;
        memberContainer.appendChild(memberCard);
    });
}

// Toggle between grid and list view
function toggleView() {
    const memberContainer = document.getElementById('memberCards');
    memberContainer.classList.toggle('list-view');
}

// Fetching weather and events data
async function fetchWeatherAndEvents() {
    try {
        // Fetch weather data (This is a placeholder URL, replace with actual API call)
        const weatherResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key');
        const weatherData = await weatherResponse.json();
        document.getElementById('currentWeather').innerText = `Temp: ${weatherData.main.temp}°C`;

        // Sample events data
        const eventsData = "Sample Event: Annual Business Conference on 20th March 2025.";
        document.getElementById('events').innerText = eventsData;
    } catch (error) {
        console.error('Error fetching weather or events:', error);
    }
}

// Initialize by fetching members and weather/events
fetchMembers();
fetchWeatherAndEvents();

// Display the current year and last modified date in the footer
document.getElementById('copyrightYear').innerText = new Date().getFullYear();
document.getElementById('lastModifiedDate').innerText = document.lastModified;
