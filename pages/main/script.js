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

divCard.setAttribute("style", "height: 230px;")

divCard.style.background = 'hsl(0, 74%, 54%)';
divCard.style.width = "187px";
divCard.innerHTML = '<span>както всунуть данные из джейсона</span>';


// for (i = 0; i <= json.pets.length; i++) {
//   var n = "img" 
//   $("testCard" + (i + 1)).append("<img src='" + json.pets[i][n] + "'>");
// }



let json = new Object()
json = {
pets:[
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]}

let petObj = JSON.parse("../../assets/pets.json");
products.forEach(function(petObj) {
  
});
$('#products').append(html);
console.log(petObj)