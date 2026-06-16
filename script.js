/**
 * FLUID KINETIC RE-ENGINEERED ARSENAL
 * Core Engine: Linear Velocity Tracking Mapping & True Magnetic Distortion Fields
 */

document.addEventListener('DOMContentLoaded', () => {

    // Programmatically initialize structural fluid canvas filter overlay
    const fluidChromaNode = document.createElement('div');
    fluidChromaNode.classList.add('ambient-liquid-glow');
    document.body.appendChild(fluidChromaNode);

    /* ==========================================================================
       1. HIGH-VELOCITY LINEAR INTERPOLATION (LERP) MOUSE PATH TRACKER
       ========================================================================== */
    let currentPosX = 0, currentPosY = 0;
    let targetPosX = 0, targetPosY = 0;

    window.addEventListener('mousemove', (mouseCoordinates) => {
        // Adjust coordinate centers based on element offset mapping bounds (700px radius / 2)
        targetPosX = mouseCoordinates.clientX - 350;
        targetPosY = mouseCoordinates.clientY - 350;
    });

    function loopFluidMotionTick() {
        // Linear Interpolation smooth step equation
        currentPosX += (targetPosX - currentPosX) * 0.07;
        currentPosY += (targetPosY - currentPosY) * 0.07;

        fluidChromaNode.style.transform = `translate3d(${currentPosX}px, ${currentPosY}px, 0)`;
        requestAnimationFrame(loopFluidMotionTick);
    }
    // Launch smooth tracking thread loop
    loopFluidMotionTick();


    /* ==========================================================================
       2. RE-DESIGNED KINETIC DIGITAL TYPEWRITER SEQUENCE
       ========================================================================== */
    const analyticsPhrases = [
        "Data Analytics Specialist.",
        "SQL Analytics Architecture.",
        "BI Executive Dashboard Developer."
    ];
    let activePhraseIdx = 0, internalCharIdx = 0, flagDeleting = false;
    const mechanicalTypingNode = document.getElementById('typing');

    function processTypingLoop() {
        const structuralPhrase = analyticsPhrases[activePhraseIdx];
        
        if (flagDeleting) {
            mechanicalTypingNode.textContent = structuralPhrase.substring(0, internalCharIdx - 1);
            internalCharIdx--;
        } else {
            mechanicalTypingNode.textContent = structuralPhrase.substring(0, internalCharIdx + 1);
            internalCharIdx++;
        }

        let calculationTimeout = flagDeleting ? 30 : 60;

        if (!flagDeleting && internalCharIdx === structuralPhrase.length) {
            calculationTimeout = 2400; // Visual retention point duration
            flagDeleting = true;
        } else if (flagDeleting && internalCharIdx === 0) {
            flagDeleting = false;
            activePhraseIdx = (activePhraseIdx + 1) % analyticsPhrases.length;
            calculationTimeout = 500;
        }

        setTimeout(processTypingLoop, calculationTimeout);
    }
    if (mechanicalTypingNode) setTimeout(processTypingLoop, 900);


    /* ==========================================================================
       3. INTUITIVE INTERSECTION PARALLAX REVEAL MATRIX
       ========================================================================== */
    const systemStaggerNodes = document.querySelectorAll('.kinetic-reveal');
    
    const viewportObservationMatrix = new IntersectionObserver((activeEntries, internalObserver) => {
        activeEntries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                internalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

    systemStaggerNodes.forEach(node => viewportObservationMatrix.observe(node));


    /* ==========================================================================
       4. TRUE HYPER-MAGNETIC ELEMENT FLEX DISTORTION MAPPING
       ========================================================================== */
    const interactiveActionNodes = document.querySelectorAll('.btn, .contact-card-link, .about-profile-card');

    interactiveActionNodes.forEach(elementNode => {
        elementNode.addEventListener('mousemove', (eventCoordinates) => {
            const geographicBounds = elementNode.getBoundingClientRect();
            
            // Isolate center vector paths within explicit container geometry bounds
            const isolatedX = eventCoordinates.clientX - geographicBounds.left - (geographicBounds.width / 2);
            const isolatedY = eventCoordinates.clientY - geographicBounds.top - (geographicBounds.height / 2);

            // Pull element fractionally toward cursor vector coordinates
            elementNode.style.transform = `translate3d(${isolatedX * 0.38}px, ${isolatedY * 0.38}px, 0) scale(1.03)`;
            elementNode.style.transition = 'none'; // Temporarily decouple transition frames to eliminate lag
        });

        elementNode.addEventListener('mouseleave', () => {
            // Re-apply smooth physics vector interpolation rules upon departure
            elementNode.style.transform = `translate3d(0, 0, 0) scale(1)`;
            elementNode.style.transition = `all 0.7s cubic-bezier(0.25, 1, 0.2, 1)`;
        });
    });


    /* ==========================================================================
       5. INTERACTIVE NAV CONTRAST SHIFT TRIGGER
       ========================================================================== */
    const structuralNavbarElement = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            structuralNavbarElement.style.background = "rgba(2, 4, 8, 0.88)";
            structuralNavbarElement.style.height = "75px";
            structuralNavbarElement.style.borderBottom = "1px solid rgba(0, 245, 212, 0.07)";
        } else {
            structuralNavbarElement.style.background = "transparent";
            structuralNavbarElement.style.height = "95px";
            structuralNavbarElement.style.borderBottom = "none";
        }
    }, { passive: true });
});
