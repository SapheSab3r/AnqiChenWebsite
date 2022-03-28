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

// filter object
$(document).ready(function(){
    const object = $(this).attr("data-filter");
    if (object == "all"){
        $(".box").show("1000");
    }
    else{
        $(".box").not("." + object).hide("1000");
        $(".box").filter("." + object).show("1000");
    }
    // add active class for selected items
    $(".filter").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})

