// When the user scrolls the page, execute navFunction
window.onscroll = function() {navFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    .navbar.css("background", "blue");
  } else {
    navbar.classList.remove("sticky");
  }
}