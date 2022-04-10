// loading page

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
const popupCloseIcon = popup.querySelector(".popup-close-icon");

product.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        const item = event.target.parentElement;
        const h2 = item.querySelector("h2").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h2").innerHTML = h2;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;
        popupBox();
    }
})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
    if(event.target == popup){
       popupBox();
    }
 })

function popupBox(){
    popup.classList.toggle("open");
}

//slider
const track = document.querySelector(".carousel_track");
const slide = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left")

const slideSize = slide[0].getBoundingClientRect();



console.log(slideSize);
//when click left, move to the left
//when click right, move to the right


// scroll Animation
const fader = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

fader.forEach(fader => {
    appearOnScroll.observe(fader);
})