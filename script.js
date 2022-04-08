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
    $(".filter").click(function(){
        const object = $(this).attr("data-filter");

        if (object == "all"){
            $(".box").show("1000");
        }

        else{
            $(".box").not("." + object).hide("1000");
            $(".box").filter("." + object).show("1000");
        }
    })
   
    // add active class for selected items
    $(".filter").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})


// send Email Info
function sendEmail(){

    Email.send({
        Host : "smtp.gmail.com",
        Username : "aac2@andrew.cmu.edu",
        Password : "An1214aot@chgo",
        To : 'aac2@andrew.cmu.edu',
        From : document.getElementById("email").value,
        Subject : document.querySelector("#name").value + " just sent you a message",
        Body : "Name:" + document.querySelector("#name").value + "<br> Email:"
        + document.querySelector("#email").value + "<br> Phone:"
        + document.querySelector("#phone").value + "<br> Message:"
        + document.querySelector("#message").value

    }).then(
      message => alert("mail sent successfully!"));

    console.log(document.querySelector("#message").value)

}


//popup content
const product = document.querySelector(".product");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn");

product.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        popupBox();

    }
})

function popupBox(){
    popup.classList.toggle("open");
}