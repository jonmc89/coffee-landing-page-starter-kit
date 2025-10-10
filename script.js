const menuBtn = document.getElementById("mobileMenuBtn");

const mobileNav = document.getElementById("mobileMenu");

const closeMenuBtn = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.add("mobile-nav-unhide");
});

closeMenuBtn.addEventListener("click", () => {
    mobileNav.classList.remove("mobile-nav-unhide");
});
