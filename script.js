document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownContent = document.getElementById("dropdown-content");
  
    dropdownBtn.addEventListener("click", function (event) {
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
      event.stopPropagation(); // Prevents the click from bubbling up to window
    });
  
    // Hide dropdown when clicking outside
    window.addEventListener("click", function () {
      dropdownContent.style.display = "none";
    });
  });
  


  // ---------------- Courses-deats - price----


  // payment.js

// Extract course and price from the URL
const params = new URLSearchParams(window.location.search);
const course = params.get("course");
const price = params.get("price");

// Dummy instructor map (optional)
const instructors = {
  "Data Structures": "Upendra Chauhan",
  "Algorithms": "Ankur chauhan",
  "Computer Network": "Ankur chauhan",
  "Operating System": "Ramkrishna Singh",
  "Machine Learning": "Ramkrishna Singh",
  "Web Development": "Shubham Singh",
  "Android Development": "Upendra Chauhan",
  "App Development": "Upendra Chauhan"
};

// Set course name and price
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("courseName").textContent = course || "Unknown Course";
  document.getElementById("coursePrice").textContent = price || "0";
  document.getElementById("instructor").textContent = instructors[course] || "John Doe";
});




// hame berger

// Wait for the HTML document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

  // Get references to the menu button and the navigation menu
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav');

  // Check if both elements were found
  if (menuButton && navMenu) {
    // Add an event listener to the menu button for click events
    menuButton.addEventListener('click', () => {
      // Toggle the 'nav-active' class on the navigation menu
      // This class will be used in CSS to show/hide the menu
      navMenu.classList.toggle('nav-active');

      // Optional: Change button appearance when menu is open (e.g., show an 'X')
      // You might toggle another class on the button itself for this
      // menuButton.classList.toggle('menu-open');
    });
  } else {
    console.error("Menu button or navigation menu not found!");
  }

});



/* Side bar Notes */


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get all sidebar list items with the class 'sidebar-item'
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  // Get all content div sections with the class 'content-section'
  const contentSections = document.querySelectorAll('.content-section');

  // Add a click event listener to each sidebar item
  sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
          // --- Hide currently active content and remove active state ---
          // Find the currently active sidebar item and remove the 'active' class
          const currentActiveItem = document.querySelector('.sidebar-item.active');
          if (currentActiveItem) {
              currentActiveItem.classList.remove('active');
          }

          // Find the currently active content section and remove the 'active' class
          const currentActiveSection = document.querySelector('.content-section.active');
          if (currentActiveSection) {
              currentActiveSection.classList.remove('active');
          }

          // --- Show the selected content and set active state ---
          // Add the 'active' class to the clicked sidebar item
          item.classList.add('active');

          // Get the target content section ID from the data-target attribute
          const targetId = item.getAttribute('data-target');
          // Find the corresponding content section by its ID
          const targetSection = document.getElementById(targetId);

          // If the target section exists, add the 'active' class to display it
          if (targetSection) {
              targetSection.classList.add('active');
              // Optional: Scroll to the top of the main content area smoothly
               targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });

  // --- Initial Load: Show the first content section ---
  // Find the first sidebar item
  const firstSidebarItem = document.querySelector('.sidebar-item');
  // If a first item exists, simulate a click on it to show its content by default
  if (firstSidebarItem) {
      firstSidebarItem.click();
  }
});