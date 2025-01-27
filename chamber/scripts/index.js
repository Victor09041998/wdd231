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
                document.getElementById('weather-info').innerHTML = `
                    <p>Temperature: ${temp}°C</p>
                    <p>Description: ${description}</p>
                `;
            } else {
                throw new Error("Missing required weather data");
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = `
                <p>Error fetching weather data. Please try again later.</p>
            `;
        });

    // Fetch members data and display spotlight cards
    fetch('data/index.json')
        .then(response => response.json())
        .then(members => {
            // Filter gold and silver members
            const goldMembers = members.filter(member => member.membershipLevel === 'gold');
            const silverMembers = members.filter(member => member.membershipLevel === 'silver');

            // Pick one random gold and one random silver member if available
            const selectedSpotlights = [];
            if (goldMembers.length > 0) {
                const randomGold = goldMembers[Math.floor(Math.random() * goldMembers.length)];
                selectedSpotlights.push(randomGold);
            }
            if (silverMembers.length > 0) {
                const randomSilver = silverMembers[Math.floor(Math.random() * silverMembers.length)];
                selectedSpotlights.push(randomSilver);
            }

            const spotlightsSection = document.getElementById('spotlight-container');
            spotlightsSection.innerHTML = selectedSpotlights.map(member => `
                <div class="spotlight">
                    <img src="${member.logo}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching members data:', error);
            document.getElementById('spotlight-container').innerHTML = `
                <p>Error fetching member spotlights. Please try again later.</p>
            `;
        });

    // Display current date and time
    const updateDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const lastModified = document.lastModified;

        document.getElementById('copyright-year').textContent = year;
        document.getElementById('last-modified').textContent = lastModified;
    };

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
