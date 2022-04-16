// бургер и карусель с параметрами
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        navText:['',''],
        dots:false,
        margin:10,
        nav:true,
        items:0,
        responsive:{
            0:{
                items:1
            },
            768:{
             margin:30,
                items:2
            },
            1280:{
                items:3
            }
        }
     
     
     })
  
  });
  