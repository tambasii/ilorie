// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Form handling
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Create success message
            const successMessage = document.createElement("p");
            successMessage.textContent = "Your message has been sent successfully!";
            successMessage.style.color = "green";
            successMessage.style.fontWeight = "bold";

            // Display message while keeping the form
            contactForm.insertAdjacentElement("afterend", successMessage);
            contactForm.reset();
        });
    }

    // Testimonial Carousel
    const testimonials = [
        { text: "Great service!", author: "John Doe", position: "CEO", image: "img1.jpg" },
        { text: "Excellent support!", author: "Jane Smith", position: "Manager", image: "img2.jpg" },
        { text: "Highly recommend!", author: "Emily Brown", position: "Developer", image: "img3.jpg" }
    ];

    let currentTestimonial = 0;

    function updateTestimonial() {
        const testimonialText = document.getElementById("testimonial-text");
        const authorName = document.getElementById("author-name");
        const authorPosition = document.getElementById("author-position");
        const authorImage = document.getElementById("author-image");

        if (testimonialText && authorName && authorPosition && authorImage) {
            // Fade out effect
            testimonialText.style.opacity = "0";
            authorName.style.opacity = "0";
            authorPosition.style.opacity = "0";
            authorImage.style.opacity = "0";

            setTimeout(() => {
                // Update content
                testimonialText.textContent = testimonials[currentTestimonial].text;
                authorName.textContent = testimonials[currentTestimonial].author;
                authorPosition.textContent = testimonials[currentTestimonial].position;
                authorImage.src = testimonials[currentTestimonial].image;

                // Fade in smoothly
                testimonialText.style.transition = "opacity 0.3s";
                authorName.style.transition = "opacity 0.3s";
                authorPosition.style.transition = "opacity 0.3s";
                authorImage.style.transition = "opacity 0.3s";

                testimonialText.style.opacity = "1";
                authorName.style.opacity = "1";
                authorPosition.style.opacity = "1";
                authorImage.style.opacity = "1";

                // Move to next testimonial
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            }, 300); // Reduced delay for faster update
        }
    }

    // Start testimonial rotation every 3 seconds
    setInterval(updateTestimonial, 3000);
    updateTestimonial(); // Show first testimonial immediately

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
