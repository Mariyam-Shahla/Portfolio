/* ==========================================
   PREMIUM PORTFOLIO JS - PART 1
========================================== */

/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar =
document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

/* ==========================================
   SPOTLIGHT CURSOR EFFECT
========================================== */

const spotlight =
document.querySelector(".spotlight");

document.addEventListener(
"mousemove",
(e)=>{

spotlight.style.left =
e.clientX + "px";

spotlight.style.top =
e.clientY + "px";

}
);

/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealItems =
document.querySelectorAll(
".scroll-reveal"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"active"
);

}

});

},

{
threshold:.15
}

);

revealItems.forEach(item=>{

observer.observe(item);

});

/* ==========================================
   PREMIUM NAVBAR
========================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(5,8,22,.92)";

navbar.style.borderBottom =
"1px solid rgba(255,255,255,.08)";

navbar.style.boxShadow =
"0 10px 40px rgba(0,0,0,.35)";

}
else{

navbar.style.background =
"rgba(5,8,22,.65)";

navbar.style.boxShadow =
"none";

}

}
);

/* ==========================================
   ACTIVE NAV LINKS
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const top =
section.offsetTop - 200;

const height =
section.clientHeight;

if(
pageYOffset >= top &&
pageYOffset < top + height
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active-link"
);

if(

link.getAttribute("href")
=== "#" + current

){

link.classList.add(
"active-link"
);

}

});

}
);

/* ==========================================
   HERO TYPING EFFECT
========================================== */

const roles = [

"Data Analyst",
"Power BI Developer",
"SQL Specialist",
"Python Analyst",
"Dashboard Designer"

];

const typing =
document.getElementById(
"typing"
);

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeText(){

const currentText =
roles[roleIndex];

if(!deleting){

typing.textContent =
currentText.substring(
0,
charIndex + 1
);

charIndex++;

if(
charIndex ===
currentText.length
){

deleting = true;

setTimeout(
typeText,
1800
);

return;

}

}else{

typing.textContent =
currentText.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

roleIndex =
(roleIndex + 1)
%
roles.length;

}

}

setTimeout(
typeText,
deleting ? 60 : 120
);

}

typeText();
/* ==========================================
   PREMIUM PARTICLE SYSTEM
========================================== */

const particleContainer =
document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 45; i++) {

        const particle =
        document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
        Math.random() * 100 + "%";

        particle.style.top =
        Math.random() * 100 + "%";

        particle.style.animationDuration =
        (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
        (Math.random() * 5) + "s";

        particle.style.opacity =
        (0.15 + Math.random() * 0.4);

        particleContainer.appendChild(
        particle
        );
    }
}

/* ==========================================
   MAGNETIC BUTTON EFFECT
========================================== */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        button.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const moveX =
        (x - rect.width / 2) * 0.15;

        const moveY =
        (y - rect.height / 2) * 0.15;

        button.style.transform =
        `translate(${moveX}px,${moveY}px)`;

    });

    button.addEventListener(
    "mouseleave",
    ()=>{

        button.style.transform =
        "translate(0,0)";

    });

});

/* ==========================================
   PREMIUM 3D PROJECT CARDS
========================================== */

const cards =
document.querySelectorAll(
".project-card-wrapper"
);

cards.forEach(card=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

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
        perspective(1400px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-12px)
        scale(1.02)
        `;

    });

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.transform =
        `
        perspective(1400px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
        scale(1)
        `;

    });

});

/* ==========================================
   PARALLAX HERO
========================================== */

const hero =
document.querySelector(
".hero-section"
);

window.addEventListener(
"scroll",
()=>{

const scrollY =
window.scrollY;

if(hero){

hero.style.transform =
`translateY(${scrollY * 0.12}px)`;

}

}
);

/* ==========================================
   FLOATING PROJECT ICONS
========================================== */

const projectIcons =
document.querySelectorAll(
".project-icon"
);

projectIcons.forEach(
(icon,index)=>{

icon.animate(

[
{
transform:
"translateY(0px)"
},
{
transform:
"translateY(-12px)"
},
{
transform:
"translateY(0px)"
}
],

{
duration:
3500 + (index * 300),

iterations:
Infinity
}

);

}
);

/* ==========================================
   HERO FADE INTRO
========================================== */

const heroContent =
document.querySelector(
".hero-text-content"
);

if(heroContent){

heroContent.style.opacity = 0;

heroContent.style.transform =
"translateY(50px)";

setTimeout(()=>{

heroContent.style.transition =
"all 1.4s ease";

heroContent.style.opacity = 1;

heroContent.style.transform =
"translateY(0px)";

},400);

}
