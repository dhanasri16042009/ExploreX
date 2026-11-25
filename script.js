
document.addEventListener("DOMContentLoaded", function () {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // SMOOTH SCROLLING
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // BACK TO TOP BUTTON
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.style.display =
        window.scrollY > 400 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // CURRENT YEAR IN FOOTER
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // WELCOME MESSAGE
  console.log("ExploreX Travel Website Loaded Successfully!");

});
