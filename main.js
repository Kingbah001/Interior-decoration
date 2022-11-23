

var hamburgerdiv = document.querySelector(".hamburger");
var mobileLinks = document.querySelector(".mobile-links-holder");
var mybackdrop = document.querySelector(".backdrop");
var myHome = document.querySelector(".home")

function dosomething (){
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-links-holder")
    mybackdrop.classList.toggle("show-backdrop")
    myHome.classList.toggle("showhome")
}