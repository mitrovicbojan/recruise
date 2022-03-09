const navIconBtn = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]");

navIconBtn.addEventListener('click', () => {
    sidebar.classList.toggle("open")
})