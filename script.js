document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".mobile-menu")
    const navLinks = document.querySelector(".nav-links")
  
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active")
        mobileMenuButton.classList.toggle("active")
      })
    }
  
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          // Close mobile menu if open
          if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active")
            mobileMenuButton.classList.remove("active")
          }
  
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: "smooth",
          })
  
          // Update active link
          document.querySelectorAll(".nav-links a").forEach((link) => {
            link.classList.remove("active")
          })
          this.classList.add("active")
        }
      })
    })
  
    // Sticky Navigation
    const navbar = document.querySelector(".navbar")
    const heroSection = document.querySelector(".hero")
  
    if (navbar && heroSection) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          navbar.classList.add("scrolled")
        } else {
          navbar.classList.remove("scrolled")
        }
      })
    }
  
    // Scroll Animation
    const animateElements = document.querySelectorAll(".animate-on-scroll")
  
    function checkScroll() {
      animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.2
  
        if (elementPosition < screenPosition) {
          element.classList.add("visible")
        }
      })
    }
  
    // Add animation classes to elements
    document
      .querySelectorAll(
        ".service-card, .value-card, .service-box, .section-header, .hero-content, .empowerment-content, .about-content, .contact-wrapper",
      )
      .forEach((element) => {
        element.classList.add("animate-on-scroll")
      })
  
    // Check scroll position on page load
    checkScroll()
  
    // Check scroll position on scroll
    window.addEventListener("scroll", checkScroll)
  
    // Form Validation and Submission
    const contactForm = document.querySelector(".contact-form form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Basic form validation
        let isValid = true
        const formInputs = contactForm.querySelectorAll("input, textarea")
  
        formInputs.forEach((input) => {
          if (input.hasAttribute("required") && !input.value.trim()) {
            isValid = false
            input.classList.add("error")
          } else {
            input.classList.remove("error")
          }
  
          if (input.type === "email" && input.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailPattern.test(input.value.trim())) {
              isValid = false
              input.classList.add("error")
            }
          }
        })
  
        if (isValid) {
          // Show success message (in a real implementation, you would send the form data to a server)
          const successMessage = document.createElement("div")
          successMessage.className = "form-success"
          successMessage.textContent = "Thank you! Your message has been sent successfully."
  
          contactForm.innerHTML = ""
          contactForm.appendChild(successMessage)
        }
      })
    }
  
    // Testimonial Carousel
    const testimonials = [
      {
        text: "Ilorie Consulting has been instrumental in helping our business navigate complex tax regulations and optimize our financial operations.",
        author: "Jane Doe",
        position: "CEO, Example Company",
        image: "images/icon-removebg-preview.png",
      },
      {
        text: "Their business development services helped us grow our revenue by 40% in just one year. Highly recommended!",
        author: "John Smith",
        position: "Founder, Growth Enterprises",
        image: "images/icon-removebg-preview.png",
      },
      {
        text: "The team at Ilorie provided exceptional accounting services that helped us streamline our financial processes.",
        author: "Sarah Johnson",
        position: "CFO, Tech Solutions",
        image: "images/icon-removebg-preview.png",
      },
    ]
  
    let currentTestimonial = 0
    const testimonialText = document.querySelector(".testimonial-text")
    const authorName = document.querySelector(".author-info h4")
    const authorPosition = document.querySelector(".author-info p")
    const authorImage = document.querySelector(".author-image img")
  
    function updateTestimonial() {
      if (testimonialText && authorName && authorPosition && authorImage) {
        // Fade out
        testimonialText.style.opacity = 0
        authorName.style.opacity = 0
        authorPosition.style.opacity = 0
        authorImage.style.opacity = 0
  
        setTimeout(() => {
          // Update content
          testimonialText.textContent = testimonials[currentTestimonial].text
          authorName.textContent = testimonials[currentTestimonial].author
          authorPosition.textContent = testimonials[currentTestimonial].position
          authorImage.src = testimonials[currentTestimonial].image
  
          // Fade in
          testimonialText.style.opacity = 1
          authorName.style.opacity = 1
          authorPosition.style.opacity = 1
          authorImage.style.opacity = 1
  
          // Update index
          currentTestimonial = (currentTestimonial + 1) % testimonials.length
        }, 500)
      }
    }
  
    // Change testimonial every 5 seconds
    setInterval(updateTestimonial, 5000)
  
    // Add CSS for new styles
    const newStyles = document.createElement("style")
    newStyles.textContent = `
      .navbar.scrolled {
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      }
      
      .nav-links.active {
        display: flex;
      }
      
      .mobile-menu.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .mobile-menu.active span:nth-child(2) {
        opacity: 0;
      }
      
      .mobile-menu.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
      
      .mobile-menu span {
        transition: all 0.3s ease;
      }
      
      .form-group input.error,
      .form-group textarea.error {
        border-color: #ff5722;
        box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.1);
      }
      
      .form-success {
        background: #4CAF50;
        color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        font-weight: 600;
      }
      
      .testimonial-text,
      .author-info h4,
      .author-info p,
      .author-image img {
        transition: opacity 0.5s ease;
      }
      
      .service-card:hover .arrow-icon,
      .empowerment-cta:hover .arrow-icon {
        animation: bounceRight 1s infinite;
      }
      
      @keyframes bounceRight {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(5px); }
      }
      
      .service-icon i,
      .value-icon i,
      .feature-icon i {
        transition: transform 0.3s ease;
      }
      
      .service-box:hover .service-icon i,
      .value-card:hover .value-icon i,
      .feature:hover .feature-icon i {
        transform: scale(1.2);
      }
    `
    document.head.appendChild(newStyles)
  
    // Parallax effect for hero section
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      const heroElements = document.querySelectorAll(".hero-bg-shape")
  
      heroElements.forEach((element, index) => {
        const speed = index === 0 ? 0.2 : 0.1
        element.style.transform = `translateY(${scrollPosition * speed}px)`
      })
    })
  
    // Counter animation for stats
    function animateCounter(element, target, duration) {
      let start = 0
      const increment = target / (duration / 16)
  
      function updateCount() {
        start += increment
        if (start >= target) {
          element.textContent = target
          return
        }
        element.textContent = Math.floor(start)
        requestAnimationFrame(updateCount)
      }
  
      updateCount()
    }
  
    // Initialize counters when they come into view
    const counterElements = document.querySelectorAll(".stats-number")
  
    if (counterElements.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = Number.parseInt(entry.target.getAttribute("data-target") || "100")
            animateCounter(entry.target, target, 2000)
            observer.unobserve(entry.target)
          }
        })
      })
  
      counterElements.forEach((counter) => {
        observer.observe(counter)
      })
    }
  
    // Add hover effect to service cards
    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const arrow = this.querySelector(".arrow-icon")
        if (arrow) {
          arrow.style.transform = "translateX(5px)"
        }
      })
  
      card.addEventListener("mouseleave", function () {
        const arrow = this.querySelector(".arrow-icon")
        if (arrow) {
          arrow.style.transform = "translateX(0)"
        }
      })
    })
  
    // Back to top button
    const backToTopButton = document.createElement("button")
    backToTopButton.className = "back-to-top"
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
    document.body.appendChild(backToTopButton)
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
    })
  
    // Add styles for back to top button
    const backToTopStyles = document.createElement("style")
    backToTopStyles.textContent = `
      .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary-color);
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
      }
      
      .back-to-top.visible {
        opacity: 1;
        visibility: visible;
      }
      
      .back-to-top:hover {
        transform: translateY(-5px);
        background: var(--primary-color);
      }
    `
    document.head.appendChild(backToTopStyles)
  })
  
  