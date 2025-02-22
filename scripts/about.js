// Function to fetch climate data from the JSON file and display it
async function fetchClimateData() {
    try {
        // Fetch the JSON data from the climate.json file
        const response = await fetch('data/goal.json');
        const data = await response.json();

        // Extract relevant data from the JSON
        const climateOverview = data.climateOverview;
        const emissions = data.emissions;
        const temperatureRise = data.temperatureRise;
        const renewableEnergy = data.renewableEnergy;

        // Insert the climate overview into the page
        document.getElementById('climate-overview').innerHTML = `
            <h3>${climateOverview.title}</h3>
            <p>${climateOverview.description}</p>
        `;

        // Insert the emissions data into the page
        let emissionsContent = `
            <h3>${emissions.title}</h3>
            <p>${emissions.description}</p>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Emissions (GtCO2)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        emissions.stats.forEach(stat => {
            emissionsContent += `
                <tr>
                    <td>${stat.year}</td>
                    <td>${stat.emissions}</td>
                </tr>
            `;
        });
        emissionsContent += `</tbody></table>`;
        document.getElementById('emissions').innerHTML = emissionsContent;

        // Insert the temperature rise data into the page
        document.getElementById('temperature-rise').innerHTML = `
            <h3>${temperatureRise.title}</h3>
            <p>${temperatureRise.description}</p>
            <p>Current temperature rise: ${temperatureRise.currentTemperatureRise} ${temperatureRise.referencePeriod}</p>
        `;

        // Insert the renewable energy data into the page
        document.getElementById('renewable-energy').innerHTML = `
            <h3>${renewableEnergy.title}</h3>
            <p>${renewableEnergy.description}</p>
            <p>Current global renewable energy percentage: ${renewableEnergy.globalRenewablePercentage}</p>
            <p>Forecasted growth by 2030: ${renewableEnergy.forecastedGrowth}</p>
        `;
    } catch (error) {
        console.error("Error fetching climate data: ", error);
        document.getElementById('climate-overview').innerHTML = "<p>Error loading climate data. Please try again later.</p>";
    }
}

// Call the fetchClimateData function on page load
window.onload = fetchClimateData;

// Display current date and time in the footer
function updateTime() {
    const currentTime = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = currentTime.toLocaleString('en-US', options);
    document.getElementById('current-time').innerText = `Current Date & Time: ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initialize immediately