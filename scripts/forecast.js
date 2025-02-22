const weatherApiKey = '6a1a3d12e180e7afea531388e72b95c0';
const unsplashApiKey = '7RAsKpfwHDXG7T90olDiKM1EeCpAIccSXjNLK3jGBeY';

async function fetchWeather() {
    const city = document.getElementById('city').value;
    if (city.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
            throw new Error('Weather data not found');
        }
        const weatherData = await weatherResponse.json();
        displayWeather(weatherData);
        fetchCityImage(city);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weatherData');
    const weatherHtml = `
        <p><strong>Location:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
    weatherDiv.innerHTML = weatherHtml;
}

async function fetchCityImage(city) {
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashApiKey}&per_page=1`;

    try {
        const imageResponse = await fetch(unsplashUrl);
        if (!imageResponse.ok) {
            throw new Error('Image not found');
        }
        const imageData = await imageResponse.json();
        displayCityImage(imageData.results[0].urls.small);
    } catch (error) {
        console.error('Error fetching city image:', error);
        alert('Error fetching city image. Please try again.');
    }
}

function displayCityImage(imageUrl) {
    const cityImageDiv = document.getElementById('cityImage');
    const imageHtml = `<img src="${imageUrl}" alt="City Image">`;
    cityImageDiv.innerHTML = imageHtml;
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
