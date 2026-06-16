/* =========================================
   PREMIUM PORTFOLIO JS
   Mariyam Shahla Portfolio
========================================= */

/* -------------------------------
   PAGE FADE IN
--------------------------------*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* -------------------------------
   TYPING EFFECT
--------------------------------*/

const roles = [
    "Data Analyst",
    "Power BI Developer",
    "SQL Enthusiast",
    "Python Analyst",
    "Data Storyteller"
];

const typingElement = document.getElementById("typing");

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

/* -------------------------------
   SCROLL REVEAL
--------------------------------*/

const revealElements =
document.querySelectorAll(".scroll-reveal");

const revealObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

/* -------------------------------
   ACTIVE NAV LINK
--------------------------------*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });

});

/* -------------------------------
   NAVBAR SCROLL EFFECT
--------------------------------*/

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(11,17,32,0.92)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background =
            "rgba(11,17,32,0.75)";

        navbar.style.boxShadow =
            "none";
    }

});

/* -------------------------------
   PROJECT CARD TILT EFFECT
--------------------------------*/

const cards =
document.querySelectorAll(
".project-card-wrapper"
);

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

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
                (y - centerY) / 20;

            const rotateY =
                (centerX - x) / 20;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";
        }
    );

});

/* -------------------------------
   BUTTON MAGNETIC EFFECT
--------------------------------*/

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left -
                rect.width / 2;

            const y =
                e.clientY -
                rect.top -
                rect.height / 2;

            button.style.transform =
                `translate(${x * 0.15}px,
                           ${y * 0.15}px)`;
        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0,0)";
        }
    );

});

/* -------------------------------
   PARALLAX BACKGROUND
--------------------------------*/

window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.pageYOffset;

        document.body.style.backgroundPosition =
            `center ${scroll * 0.05}px`;
    }
);

/* -------------------------------
   PREMIUM CURSOR GLOW
--------------------------------*/

const cursor =
document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";
    }
);

/* -------------------------------
   SMOOTH SCROLL LINKS
--------------------------------*/

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

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
        }
    );
});

/* -------------------------------
   FLOATING PROJECT ICONS
--------------------------------*/

const icons =
document.querySelectorAll(".project-icon");

icons.forEach((icon,index)=>{

    icon.animate(
    [
        {
            transform:"translateY(0px)"
        },
        {
            transform:"translateY(-12px)"
        },
        {
            transform:"translateY(0px)"
        }
    ],
    {
        duration:3000 + (index * 300),
        iterations:Infinity
    });

});

/* -------------------------------
   HERO FADE UP
--------------------------------*/

const hero =
document.querySelector(".hero-text-content");

setTimeout(() => {

    hero.style.opacity = "1";
    hero.style.transform =
        "translateY(0px)";

}, 300);
