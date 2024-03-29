const menuBars = document.querySelector(".mobile-menu-bar");

const menuItems = document.querySelector(".menu-items");

menuBars.addEventListener("click", () => {
  menuItems.classList.toggle("expanded");
  menuBars.firstElementChild.classList.toggle("fa-xmark");
});