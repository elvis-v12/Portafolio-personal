/*==============================Toggle style switcher ===========================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
   document.querySelector(".style-switcher").classList.toggle("open");
} );
// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(  document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
/*============================== THE TEME COLORS ===========================*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style) =>{
     if(color === style.getAttribute("title")){
        style.removeAttribute("disabled");
     }else{
        style.setAttribute("disabled","true");
     }
    });
}
/*============================== THEME LIGHT AND DARK MODE ===========================*/
const dayNaght =document.querySelector(".day-night");
window.addEventListener("load",() =>{
    if(document.body.classList.contains("dark")){
        dayNaght.querySelector("i").classList.add("fa-sun");

    }else{
        dayNaght.querySelector("i").classList.remove("fa-moon");
    }
});