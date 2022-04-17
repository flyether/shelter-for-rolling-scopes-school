// бургер и карусель с параметрами
// привязываю меню к бургеру
const hamburgerUp = document.querySelector('.hamburger');
if(hamburgerUp){
  const navUp = document.querySelector('.nav');
  hamburgerUp.addEventListener("click", function(e){
    document.body.classList.toggle('_lock')
    hamburgerUp.classList.toggle('_active');
  navUp.classList.toggle('_active');
});}

// вызов бургера и карусели

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
                items:1,
              
            },
            768:{
             margin:30,
                items:2
            },
            1280:{
                items:3,
             
            }
        }
     
     
     })
  
  });
   // попап модальное окно

  //  const modalResultWrapper = document.getElementById('modal-result-wrapper')
  //  const btnClose = document.getElementById('btn-close')
  //  const overlay = document.getElementById('overlay')
  //  const contentWrapper = document.getElementById('content')

  //  modalResultWrapper.style.display = 'none'  // прячем модальное окно


let divCard = document.createElement('div');

// document.body.appendChild(divCard);
document.getElementById("testCard").appendChild(divCard);
divCard.className = 'className';
divCard.id ='myDIV';

divCard.setAttribute("style", "height: 130px;")

divCard.style.background = 'hsl(0, 74%, 54%)';
divCard.style.width = "87px";
divCard.innerHTML = '<span>както всунуть данные из джейсона</span>';
