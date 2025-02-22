// Fetch JSON data
async function fetchData() {
    try {
        const response = await fetch('data/climateData.json');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display data dynamically
function displayData(data) {
    const section = document.querySelector('#data-section');
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('data-item');
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.title}">
        `;
        section.appendChild(div);
    });
}

const apiKey = "6a1a3d12e180e7afea531388e72b95c0"; // Replace with your OpenWeather API key
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

        // Function to show weather
        function showWeather() {
            const location = document.getElementById('location').value;
            const weatherDataDiv = document.getElementById('weather-data');

            // Check if the location is entered
            if (!location) {
                weatherDataDiv.innerHTML = "Please enter a location.";
                return;
            }

            // Fetch weather data from API
            fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    // Check if the API returns an error
                    if (data.cod !== 200) {
                        weatherDataDiv.innerHTML = `Error: ${data.message}`;
                    } else {
                        // Display the weather data
                        weatherDataDiv.innerHTML = `
                            <p><strong>Weather in ${data.name}, ${data.sys.country}:</strong></p>
                            <p>Temperature: ${data.main.temp}°C</p>
                            <p>Weather: ${data.weather[0].description}</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                            <p>Wind Speed: ${data.wind.speed} m/s</p>
                        `;
                    }
                })
                .catch(error => {
                    weatherDataDiv.innerHTML = `Error fetching weather data: ${error}`;
                });
        }

// Event listener for form submission
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));
    alert('Form data saved!');
});

fetchData();

// Display current date and time in the footer
function updateTime() {
    const currentTime = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = currentTime.toLocaleString('en-US', options);
    document.getElementById('current-time').innerText = `Current Date & Time: ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initialize immediately
