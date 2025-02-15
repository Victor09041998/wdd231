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
