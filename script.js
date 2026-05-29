document.addEventListener("DOMContentLoaded", () => {

    /* ================= TYPING ANIMATION ================= */
    const roles = [
        "Aspiring Data Analyst",
        "Power BI & SQL Enthusiast",
        "Data Storyteller"
    ];

    const typingElement = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        // Output text snippet
        typingElement.textContent = currentRole.substring(0, charIndex);

        // Control typing and deleting velocities
        let speed = isDeleting ? 50 : 90;

        // Pause at the end of a fully typed word
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1500; // Left it long enough for visitors to read clearly
            isDeleting = true;
        }

        // Move to the next string in sequence once erased
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 300; // Small programmatic rest before writing the next title
        }

        setTimeout(typeEffect, speed);
    }

    // Initialize animation loops if target container is present
    if (typingElement) {
        typeEffect();
    }


    /* ================= SMOOTH SECTION NAVIGATION SCROLLING ================= */
    document.querySelectorAll(".nav-links a, .hero-buttons a").forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            
            // Only capture internal document fragments
            if (targetId.startsWith("#")) {
                e.preventDefault();
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Account for structural sticky navigation height offsets
                    const navOffset = 80; 
                    const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });


    /* ================= SCROLL REVEAL (INTERSECTION OBSERVER) ================= */
    const revealSections = document.querySelectorAll(".scroll-reveal");

    const revealOptions = {
        threshold: 0.12, // Fires reveal animation immediately when card element crosses boundaries
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Stop observing once visible to maintain animation persistence on page layout
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });


    /* ================= ACTIVE NAVBAR NAVIGATION LINK HIGHLIGHTING ================= */
    const monitoredSections = document.querySelectorAll("section[id]");
    const targetNavAnchors = document.querySelectorAll(".nav-links a");

    function highlightActiveNavigation() {
        let scrollYPosition = window.scrollY;

        monitoredSections.forEach(currentSection => {
            const sectionalHeight = currentSection.offsetHeight;
            // Balance off navbar space limits cleanly 
            const sectionalTopOffset = currentSection.offsetTop - 140; 
            const sectionalId = currentSection.getAttribute("id");

            if (scrollYPosition > sectionalTopOffset && scrollYPosition <= sectionalTopOffset + sectionalHeight) {
                targetNavAnchors.forEach(anchorLink => {
                    if (anchorLink.getAttribute("href") === "#" + sectionalId) {
                        anchorLink.style.color = "#38bdf8";
                    } else {
                        anchorLink.style.color = ""; // Falls back safely to style.css base values
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightActiveNavigation);
    highlightActiveNavigation(); // Run initialization frame once on load check
});
