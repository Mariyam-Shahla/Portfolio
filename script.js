document.addEventListener("DOMContentLoaded", () => {

  /* ================= TYPING ANIMATION ================= */
  const roles = [
    "Data Analyst",
    "Power BI Developer",
    "SQL Enthusiast",
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

    typingElement.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1200;
      isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();


  /* ================= SMOOTH NAV SCROLL ================= */
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* ================= SCROLL REVEAL (PREMIUM) ================= */
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    observer.observe(section);
  });


  /* ================= ACTIVE NAV HIGHLIGHT ================= */
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

  });

});
