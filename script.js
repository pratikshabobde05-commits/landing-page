const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple welcome message
window.onload = () => {
  console.log("Portfolio Loaded Successfully");
};
