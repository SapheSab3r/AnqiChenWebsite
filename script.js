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


// to-top buttom
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
} )