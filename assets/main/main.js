var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "/assets/img/sun.png"
    }else{
        icon.src = "/assets/img/moon.png"
    }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var navbar = document.getElementById("header-scroll")
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.height = "70px";
    navbar.style.background = "var(--bg-color)"
  } else {
    navbar.style.height = "100px";
    navbar.style.background = "none"
  }
}