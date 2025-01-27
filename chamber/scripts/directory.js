// Fetch member data and insert into the directory
async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json'); // Change this to the actual path of your JSON file
        const members = await response.json();
        const memberCards = document.getElementById('memberCards');

        members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';

            card.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <h2>${member.name}</h2>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
            `;

            memberCards.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Insert the current date and time into the footer
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;

    const lastModified = new Date().toLocaleString();
    document.getElementById('last-modified').textContent = lastModified;
}

// Call the functions when the page loads
window.addEventListener('DOMContentLoaded', () => {
    fetchMemberData();
    updateFooter();
});
