// JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !isExpanded);
      navLinks.classList.toggle("show");
  });

  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedParagraph = document.getElementById("lastModified");

  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear;  // Sets current year in the footer

  // Check if 'lastModified' element exists and update it with the last modified date
  if (lastModifiedParagraph) {
      lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
  }

  const courses = [
      { name: "WDD230", credits: 3, type: "WDD", completed: true },
      { name: "WDD240", credits: 3, type: "WDD", completed: false },
      { name: "CSE110", credits: 3, type: "CSE", completed: true },
      { name: "CSE210", credits: 4, type: "CSE", completed: false }
  ];

  const courseContainer = document.getElementById("course-container");
  const totalCreditsSpan = document.getElementById("total-credits");

  const displayCourses = (type = "all") => {
      courseContainer.innerHTML = "";
      let filteredCourses = courses;

      if (type !== "all") {
          filteredCourses = courses.filter(course => course.type === type);
      }

      let totalCredits = 0;

      filteredCourses.forEach(course => {
          const courseDiv = document.createElement("div");
          courseDiv.textContent = `${course.name} (${course.credits} credits)`;
          courseDiv.classList.add(course.completed ? "completed" : "pending");
          courseContainer.appendChild(courseDiv);
          totalCredits += course.credits;
      });

      totalCreditsSpan.textContent = totalCredits;
  };

  displayCourses();
  window.filterCourses = displayCourses;
});
