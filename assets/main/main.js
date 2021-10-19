
//darkmode
var icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    document.body.classList.contains("dark-theme") 
    ? icon.src = "./assets/img/sun.png" 
    : icon.src = "./assets/img/moon.png" 
}

//scroll
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    var navbar = document.getElementById("header-scroll")
    var input = document.getElementById("input")
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.height = "70px"
    navbar.style.background = "var(--bg-color)"
    input.style.border = "2px solid #eee"
  } else {
    navbar.style.height = "100px"
    navbar.style.background = "none"
  }
}

//Counter Up
$('.counter').counterUp({
  delay: 10,
  time: 5000
});
$('.counter').addClass('animated fadeInDownBig');


