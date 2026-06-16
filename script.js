document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. LUXURY TYPING ANIMATION (DATA RE-SAMPLING SIMULATION)
       ========================================================================== */
    const strings = [
        "Data Analytics Specialist.",
        "SQL Query Optimization Specialist.",
        "Interactive Dashboard Developer.",
        "B.Sc Mathematics Graduate."
    ];
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 70;
    const erasingSpeed = 40;
    const delayBetweenStrings = 2000; 
    const typingElement = document.getElementById('typing');

    function type() {
        const currentString = strings[stringIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentString.length) {
            setTimeout(() => isDeleting = true, delayBetweenStrings);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
        }

        const currentDelay = isDeleting ? erasingSpeed : typingSpeed;
        setTimeout(type, currentDelay);
    }

    if (typingElement) {
        setTimeout(type, 500);
    }


    /* ==========================================================================
       2. PREMIUM SCROLL REVEAL ENGINE
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const checkReveal = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Execute setup frame validation instantly


    /* ==========================================================================
       3. DYNAMIC AMETHYST ILLUMINATION EFFECT (MOUSE SPOTLIGHT INTERACTION)
       ========================================================================== */
    const cards = document.querySelectorAll('.project-card-wrapper');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });


    /* ==========================================================================
       4. FIXED NAVBAR STRUCTURAL SHADOW TRANSPOSITION
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = "rgba(10, 5, 18, 0.92)";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.background = "rgba(10, 5, 18, 0.75)";
            navbar.style.boxShadow = "none";
        }
    });
});
