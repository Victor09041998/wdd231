// Update the copyright year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Display last modified date
document.getElementById("lastModified").textContent += document.lastModified;
