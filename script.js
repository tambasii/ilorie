// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Form handling
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Remove any existing success message before adding a new one
            let existingMessage = document.getElementById("success-message");
            if (existingMessage) {
                existingMessage.remove();
            }

            // Collect form data
            const formData = new FormData(contactForm);

            try {
                // Send data to backend (Replace 'YOUR_BACKEND_URL' with your actual endpoint)
                let response = await fetch("YOUR_BACKEND_URL", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    // Show success message
                    const successMessage = document.createElement("p");
                    successMessage.id = "success-message";
                    successMessage.textContent = "Your message has been sent successfully!";
                    successMessage.style.color = "green";
                    successMessage.style.fontWeight = "bold";
                    successMessage.style.marginTop = "10px";

                    contactForm.insertAdjacentElement("afterend", successMessage);
                    contactForm.reset(); // Reset form fields after successful submission
                } else {
                    throw new Error("Something went wrong. Please try again.");
                }
            } catch (error) {
                // Show error message
                const errorMessage = document.createElement("p");
                errorMessage.id = "success-message";
                errorMessage.textContent = error.message;
                errorMessage.style.color = "red";
                errorMessage.style.fontWeight = "bold";
                errorMessage.style.marginTop = "10px";

                contactForm.insertAdjacentElement("afterend", errorMessage);
            }
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
    const menuToggle = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", function(event) {
        if (navLinks && navLinks.classList.contains("active")) {
            if (!event.target.closest(".mobile-menu") && !event.target.closest(".nav-links")) {
                navLinks.classList.remove("active");
            }
        }
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === "#" + sectionId) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }
    
    window.addEventListener("scroll", highlightNavOnScroll);
});