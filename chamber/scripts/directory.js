// Function to fetch member data from the JSON file
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

// Function to display members in either grid or list view
function displayMembers(members) {
    const directoryList = document.getElementById('directory-list');
    directoryList.innerHTML = ''; // Clear current list

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
        `;
        
        directoryList.appendChild(memberCard);
    });
}

// Function to toggle between grid and list view
document.getElementById('toggleView').addEventListener('click', () => {
    const directoryList = document.getElementById('directory-list');
    directoryList.classList.toggle('grid-view');
    directoryList.classList.toggle('list-view');
});

// Display current year and last modified date
document.getElementById('copyright-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Load the member data when the page is ready
loadMembers();
