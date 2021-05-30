jQuery(function($){
  //MENU FIXO
  window.onscroll = function() {
    if(window.pageYOffset > 40){
      $('#header').addClass("active");
    } else {
      $('#header').removeClass("active");
    }
  }
});

$(document).ready(function(){
  aos_init()
});

function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  })
}