// slide when small screen
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}

navSlide();

// sticky navigation bar
window.onscroll = function (){fixedNav()};

const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;

function fixedNav() {
    if (window.pageYOffset > sticky){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
}