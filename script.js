// text writer
const typeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method 
typeWriter.prototype.type = function(){
    //current index of word 
    const current = this.wordIndex % this.words.length;
    //get full text of the current word
    const fullTxt = this.words[current];

    //check if deleting
    if(this.isDeleting){
        //remve char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else{
        //add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //insert txt into element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;
    //Initial typing speed 
    let typeSpeed = 100;
    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //if word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        //make a pause at the end
        typeSpeed = this.wait;
        //set delete to true
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ""){
        this.isDeleting = false;
    }

    setTimeout(()=> this.type(), 305)

}
//Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

function init(){
    const txtElement = document.querySelector(".text-1");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    //init TypeWriter
    new typeWriter(txtElement, words, wait);   
}

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

popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
    if(event.target == popup){
       popupBox();
    }
 })

function popupBox(){
    popup.classList.toggle("open");
}

//scroll to section
$('#future-plan').click(function(){
    $(document).scrollTop(100) // any value you need
    });

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

//remove hover mode 
