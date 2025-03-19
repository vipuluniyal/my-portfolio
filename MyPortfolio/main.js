document.addEventListener("DOMContentLoaded", function () {
    // Create the menu toggle button dynamically
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    document.body.appendChild(menuToggle);

    // Select navigation menu
    const navLinks = document.querySelector(".nav ul");

    // Toggle menu on click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
