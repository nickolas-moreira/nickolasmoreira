// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// ELEMENTS
const nav = document.querySelector(".navbar");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");


// SCROLL REVEAL (INTERSECTION OBSERVER)
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15, // triggers when 15% of element is visible
  }
);

reveals.forEach((el) => observer.observe(el));



// MAIN SCROLL ENGINE
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // BACKGROUND COLOR SHIFT
  if (scrollY < 500) {
    document.body.style.background = "#f5feff";
  } else if (scrollY < 1000) {
    document.body.style.background = "#8BE6FF";
  } else {
    document.body.style.background = "#82A0A9";
  }


  // NAVBAR BLUR EFFECT
  if (scrollY > 50) {
    nav.style.background = "rgba(0, 111, 142, 0.9)";
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.background = "#006F8E";
    nav.style.backdropFilter = "none";
  }


  // ACTIVE NAV LINK
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Fill out all fields bro 😤");
  }
});