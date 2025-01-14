document.addEventListener('DOMContentLoaded', () => {
    // Display current year and last modified date in the footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
  
    const memberList = document.getElementById('member-list');
    const toggleButton = document.getElementById('toggleView');
  
    // Fetch members data from the JSON file
    async function fetchMembers() {
      const response = await fetch('data/members.json');
      const members = await response.json();
      displayMembers(members);
    }
  
    function displayMembers(members) {
      memberList.innerHTML = '';
      members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        memberList.appendChild(card);
      });
    }
  
    // Toggle between grid and list view
    toggleButton.addEventListener('click', () => {
      memberList.classList.toggle('grid-view');
      memberList.classList.toggle('list-view');
    });
  
    fetchMembers();
  });
  