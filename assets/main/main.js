
//darkmode
var icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    document.body.classList.contains("dark-theme") 
    ? icon.src = "./assets/img/sun.png" 
    : icon.src = "./assets/img/moon.png" 
}

// scroll
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

//slide
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:1,
  autoplay:true,
  autoplayTimeout:5000,
  smartSpeed: 1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

// Mobile popup

// $(document).ready(function() {
//   $('.fa-bars').click(function() {
//     $('.test').slideToggle("100");
//   });
// });

