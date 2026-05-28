
const roles = [
  "Data Analyst",
  "Power BI Enthusiast",
  "SQL Analyst",
  "Tableau Creator"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
  document.getElementById("typing");

/* ================= TYPING EFFECT ================= */

function typeEffect() {

  if (charIndex < roles[roleIndex].length) {

    typingElement.innerHTML +=
      roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  }

  else {

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect() {

  if (charIndex > 0) {

    typingElement.innerHTML =
      roles[roleIndex].substring(
        0,
        charIndex - 1
      );

    charIndex--;

    setTimeout(eraseEffect, 50);

  }

  else {

    roleIndex++;

    if (roleIndex >= roles.length) {

      roleIndex = 0;

    }

    setTimeout(typeEffect, 500);

  }

}

/* ================= START TYPING ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    if (typingElement) {

      typeEffect();

    }

  }
);

/* ================= HEADER SHADOW ================= */

window.addEventListener("scroll", () => {

  const header =
    document.querySelector("header");

  if (window.scrollY > 50) {

    header.style.boxShadow =
      "0 5px 20px rgba(0,0,0,0.3)";

  }

  else {

    header.style.boxShadow = "none";

  }

});

/* ================= ACTIVE NAV ================= */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      .includes(current)
    ) {

      link.classList.add("active");

    }

  });

});

