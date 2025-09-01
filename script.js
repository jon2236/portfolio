let dropDown = document.querySelector(".dropdown-icon")
let navItems = document.querySelector(".nav-items")

function mostrarNav() {
    navItems.classList.toggle("mostrar");
}

dropDown.addEventListener("click", mostrarNav);