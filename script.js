
/* ==========================================
   PREMIUM PORTFOLIO JAVASCRIPT
   Mariyam Shahla Portfolio
========================================== */

/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

const roles = [
    "Data Analyst",
    "Power BI Developer",
    "SQL Enthusiast",
    "Python Analyst",
    "Dashboard Designer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
document.querySelectorAll(".scroll-reveal");

const revealObserver =
new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }
    });

},
{
    threshold:0.15
});

revealElements.forEach(element=>{
    revealObserver.observe(element);
});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");
    }
});

/* ==========================================
   PREMIUM MOUSE GLOW
========================================== */

const glow = document.createElement("div");
glow.classList.add("glow");
document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const hero =
document.querySelector(".hero-container");

document.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.clientX) / 60;

    const y =
    (window.innerHeight / 2 - e.clientY) / 60;

    hero.style.transform =
    `translate(${x}px, ${y}px)`;
});

/* ==========================================
   PROJECT CARD TILT EFFECT
========================================== */

const cards =
document.querySelectorAll(
".project-card-wrapper"
);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        (y - centerY) / 18;

        const rotateY =
        (centerX - x) / 18;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;
    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
        `;
    });
});

/* ==========================================
   SKILL CARD FLOAT EFFECT
========================================== */

const skillCards =
document.querySelectorAll(
".skill-category-card"
);

skillCards.forEach((card,index)=>{

    card.style.animation =
    `floatSkill 5s ease-in-out ${index * .3}s infinite`;
});

/* ==========================================
   ADD FLOAT ANIMATION VIA JS
========================================== */

const style =
document.createElement("style");

style.innerHTML = `
@keyframes floatSkill{
    0%,100%{
        transform:translateY(0px);
    }
    50%{
        transform:translateY(-8px);
    }
}
`;

document.head.appendChild(style);

/* ==========================================
   SMOOTH ANCHOR SCROLL
========================================== */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }
    });
});

/* ==========================================
   FADE-IN ON PAGE LOAD
========================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";
});

/* ==========================================
   STAGGER PROJECT ENTRANCE
========================================== */

cards.forEach((card,index)=>{

    card.style.opacity = "0";
    card.style.transform =
    "translateY(50px)";

    setTimeout(()=>{

        card.style.transition =
        "all .8s ease";

        card.style.opacity = "1";
        card.style.transform =
        "translateY(0)";

    },300 + index * 150);
});

/* ==========================================
   CONTACT CARD HOVER GLOW
========================================== */

const contacts =
document.querySelectorAll(
".contact-card-link"
);

contacts.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow =
        "0 0 35px rgba(56,189,248,.25)";
    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow = "none";
    });
});
