export function openMenu(){
    let btnMenu = document.querySelector(".nav_menu");
    let menu = document.querySelector(".menu");
    let menuLink = document.querySelectorAll(".menu_container-link");
    let html = document.documentElement;

    menuLink.forEach((link) => {
        link.addEventListener("click", () => {
            btnMenu.classList.remove("active");
            menu.classList.remove("active");
            html.classList.remove("no-scroll");
        })
    })

    btnMenu.addEventListener("click", () => {
        if (btnMenu.classList.contains("active")) {
            btnMenu.classList.remove("active");
            menu.classList.remove("active");
            html.classList.remove("no-scroll");
        } 
        else {
            btnMenu.classList.add("active");
            menu.classList.add("active");
            html.classList.add("no-scroll");
        }
    });
}