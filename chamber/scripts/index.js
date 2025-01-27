document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "803de6c492018be5df7ff846855f7be5";
    const city = "Aba";

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.main && data.weather) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                document.getElementById('weather').innerHTML = `
                    <p>Temperature: ${temp}°C</p>
                    <p>Description: ${description}</p>
                `;
            } else {
                throw new Error("Missing required weather data");
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = `
                <p>Error fetching weather data. Please try again later.</p>
            `;
        });

    // Fetch members data and display spotlight cards
    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            const spotlights = members.filter(member => member.membershipLevel === 'gold' || member.membershipLevel === 'silver');
            const selectedSpotlights = [];

            while (selectedSpotlights.length < 2 && spotlights.length > 0) {
                const randomIndex = Math.floor(Math.random() * spotlights.length);
                selectedSpotlights.push(spotlights.splice(randomIndex, 1)[0]);
            }

            const spotlightsSection = document.getElementById('spotlights');
            spotlightsSection.innerHTML = selectedSpotlights.map(member => `
                <div class="spotlight">
                    <img src="${member.logo}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p>Website: <a href="${member.website}">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching members data:', error);
            document.getElementById('spotlights').innerHTML = `
                <p>Error fetching member spotlights. Please try again later.</p>
            `;
        });
});
