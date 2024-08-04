document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const body = document.body;

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Menghentikan event dari bubble ke body
    navMenu.classList.toggle("show");
  });

  body.addEventListener("click", function () {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  });

  navMenu.addEventListener("click", function (event) {
    event.stopPropagation(); // Menghentikan event dari bubble ke body
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    alert("Your message has been sent!");
  });
});
