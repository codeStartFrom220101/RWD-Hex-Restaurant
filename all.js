const showMenu = document.querySelector(".showMenu");
const menu = document.querySelector(".menu");
showMenu.addEventListener("click", function (e) {
    menu.classList.toggle("menuActive");
})
