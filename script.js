/**
 * ULTRA-PREMIUM INTERACTIVE PORTFOLIO ENGINE
 * Architecture Core: Intersection Observer Orchestration & 3D Proximity Projection Matrix
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. ADVANCED MONOCHROME METADATA TYPEWRITER
       ========================================================================== */
    const analyticsLexicon = [
        "Data Analytics Specialist.",
        "SQL Analytics Architecture.",
        "BI Executive Dashboard Developer.",
        "B.Sc Mathematics Graduate."
    ];
    
    let lexiconIdx = 0;
    let characterIdx = 0;
    let stateDeleting = false;
    const writeVelocity = 60;
    const deleteVelocity = 35;
    const holdDuration = 2500; 
    const targetTerminalNode = document.getElementById('typing');

    function executeTypePipeline() {
        const structuralString = analyticsLexicon[lexiconIdx];
        
        if (stateDeleting) {
            targetTerminalNode.textContent = structuralString.substring(0, characterIdx - 1);
            characterIdx--;
        } else {
            targetTerminalNode.textContent = structuralString.substring(0, characterIdx + 1);
            characterIdx++;
        }

        if (!stateDeleting && characterIdx === structuralString.length) {
            setTimeout(() => stateDeleting = true, holdDuration);
        } else if (stateDeleting && characterIdx === 0) {
            stateDeleting = false;
            lexiconIdx = (lexiconIdx + 1) % analyticsLexicon.length;
        }

        const dynamicallyCalculatedSpeed = stateDeleting ? deleteVelocity : writeVelocity;
        setTimeout(executeTypePipeline, dynamicallyCalculatedSpeed);
    }

    if (targetTerminalNode) {
        setTimeout(executeTypePipeline, 800);
    }


    /* ==========================================================================
       2. CINEMATIC KINETIC INTERSECTION OBSERVER
       ========================================================================== */
    const elementsToReveal = document.querySelectorAll('.kinetic-reveal');
    
    const configurationMatrix = {
        root: null,
        threshold: 0.12, 
        rootMargin: "0px 0px -40px 0px"
    };

    const sectionRevealObserver = new IntersectionObserver((observedEntries, internalObserver) => {
        observedEntries.forEach(realTimeEntry => {
            if (realTimeEntry.isIntersecting) {
                // Instantly inject computational structural state
                realTimeEntry.target.classList.add('revealed');
                // Drop tracking anchor down to preserve system resources
                internalObserver.unobserve(realTimeEntry.target);
            }
        });
    }, configurationMatrix);

    elementsToReveal.forEach(targetDomNode => {
        sectionRevealObserver.observe(targetDomNode);
    });


    /* ==========================================================================
       3. 3D PROXIMITY MAGNETISM & SPATIAL WARPING MATRICES
       ========================================================================== */
    const projectShowcaseCards = document.querySelectorAll('.project-card-wrapper');

    projectShowcaseCards.forEach(luxuryCard => {
        luxuryCard.addEventListener('mousemove', (mouseEvent) => {
            const cardGeometryBounds = luxuryCard.getBoundingClientRect();
            
            // Calculate relative spatial vector metrics
            const spatialX = mouseEvent.clientX - cardGeometryBounds.left;
            const spatialY = mouseEvent.clientY - cardGeometryBounds.top;

            // Generate angle calculations centered around the origin coordinates
            const coordinateXCenter = cardGeometryBounds.width / 2;
            const coordinateYCenter = cardGeometryBounds.height / 2;
            
            // Force 3D warp calculations limited to comfortable rotation thresholds (max ~10deg)
            const rotationDegreeY = ((spatialX - coordinateXCenter) / coordinateXCenter) * 10;
            const rotationDegreeX = -((spatialY - coordinateYCenter) / coordinateYCenter) * 10;

            // Project spatial tracking layout variables directly down to elements
            luxuryCard.style.transform = `perspective(1000px) rotateX(${rotationDegreeX}deg) rotateY(${rotationDegreeY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        luxuryCard.addEventListener('mouseleave', () => {
            // Restore smooth ground physics vector state on exit
            luxuryCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            luxuryCard.style.transition = `transform 0.8s cubic-bezier(0.25, 1, 0.3, 1), border-color 0.5s ease, box-shadow 0.5s ease`;
        });
        
        luxuryCard.addEventListener('mouseenter', () => {
            // Drop transitions while calculations loop to prevent execution friction
            luxuryCard.style.transition = `border-color 0.5s ease, box-shadow 0.5s ease`;
        });
    });


    /* ==========================================================================
       4. INTERACTIVE GLASS BLUR BLENDING SCROLL TRANSLATION
       ========================================================================== */
    const globalNavbarNode = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            globalNavbarNode.style.background = "rgba(3, 1, 6, 0.75)";
            globalNavbarNode.style.height = "70px";
            globalNavbarNode.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
        } else {
            globalNavbarNode.style.background = "rgba(3, 1, 6, 0.4)";
            globalNavbarNode.style.height = "80px";
            globalNavbarNode.style.boxShadow = "none";
        }
    }, { passive: true });
});
