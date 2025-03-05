// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Form handling
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Remove any existing success message before adding a new one
            let existingMessage = document.getElementById("success-message");
            if (existingMessage) {
                existingMessage.remove();
            }

            // Create success message
            const successMessage = document.createElement("p");
            successMessage.id = "success-message"; // Set an ID to prevent duplicates
            successMessage.textContent = "Your message has been sent successfully!";
            successMessage.style.color = "green";
            successMessage.style.fontWeight = "bold";
            successMessage.style.marginTop = "10px";

            // Display message while keeping the form
            contactForm.insertAdjacentElement("afterend", successMessage);
            contactForm.reset();
        });
    }
    
    // Smooth Scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
            }
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});
