// const mQuery320 = window.matchMedia('(min-width: 768px)')
// const mQuery768 = window.matchMedia('(min-width: 1280px)')

// let   cardOnPages = 3;
// if (mQuery320.matches) { 
//   cardOnPages = 6; 
// }
// if (mQuery768.matches) { 
//   cardOnPages = 8; }
const mQuery320 = window.matchMedia('(min-width: 768px)')
const mQuery768 = window.matchMedia('(min-width: 1280px)')

let   cardOnPages = 3;
if (mQuery320.matches) { 
  cardOnPages = 6; 
}
if (mQuery768.matches) { 
  cardOnPages = 8; }
  

 


// бургер  с параметрами
// привязываю меню к бургеру
const hamburgerUp = document.querySelector('.hamburger');
if(hamburgerUp){
  const navUp = document.querySelector('.nav');
  hamburgerUp.addEventListener("click", function(e){
    document.body.classList.toggle('_lock')
    hamburgerUp.classList.toggle('_active');
  navUp.classList.toggle('_active');
});}

// вызов бургера 

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
   
  
  });
  
  var jsonPets  = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
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
      "img": "../../assets/images/pets-sofi.png",
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
      "img": "../../assets/images/pets-woody.png",
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
      "img": "../../assets/images/pets-scarlet.png",
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
      "img": "../../assets/images/pets-katrine.png",
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
      "img": "../../assets/images/pets-timmy.png",
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
      "img": "../../assets/images/pets-freddie.png",
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
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

  
  // Модальное окно



  window.onload = function () {
    // константы модального окна
    const modalResultWrapper = document.getElementById('modal-result-wrapper')
    const btnClose = document.getElementById('btn-close')
    const overlay = document.getElementById('overlay')
    const modalWindow = document.getElementById('content')
    const cardModal = document.querySelectorAll('.card');
    const body = document.querySelector('body');
    
     // модальное окно его константы вверху
     
      modalResultWrapper.style.display = 'none'  // прячем модальное окно
     // вешаем шаблон на модальное окно
    
      let modalPetsItem = document.getElementById('modal-pets-item').innerHTML,
    
     compiledModal = _.template(modalPetsItem);
      // открывае модальное окно при нажатии на карточку т вешаем ему шаблон
     cardModal.forEach(e=>{
      e.addEventListener('click', (event) =>{
      modalResultWrapper.style.display = 'block'
      let i = event.currentTarget.dataset.pet
      var htmlModal = compiledModal(jsonPets[i])
      modalWindow .innerHTML = htmlModal
      body.classList.add("modal-open")
      
         })
    })
    
      // функция закрыти я модалного окна
    const closeModal = () => {
      modalResultWrapper.style.display = 'none'
      body.classList.remove("modal-open")
    }
    // закрываем модальное окно по клику на оверлей
      overlay.addEventListener('click', closeModal)
      btnClose.addEventListener('click', closeModal)
    
  }
    
    
    

  // Пагинация

  let jsonPetsArr48 =  jsonPets.concat(jsonPets).concat(jsonPets ).concat(jsonPets ).concat(jsonPets).concat(jsonPets)
  // премешиваем зверей

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // Пока остаются элементы для перетасовки
    while (currentIndex != 0) {
  
      // Выберите оставшийся элемент
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // И замените его текущим элементом.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


  let jsonPetsShuffle = shuffle(jsonPetsArr48)
    
// функция присваивает индекс карточкам
function getDataForProductItemTemplate(pet,index) {
  return {
      index:index,
      img:pet.img,
      name: pet.name,
     }
}


// bзменяем количество карточек под медиазапрос


let items =  document.querySelectorAll('#pagination li')
let divCardSpace = document.querySelector('.card-space')
let left1 = document.querySelector('.left1')
let left2 = document.querySelector('.left2')
let right1 = document.querySelector('.right1')
let right2 = document.querySelector('.right2')
let center = document.querySelector('.center')

for ( let item of items) {
item.addEventListener("click", function(){
let pageNum = +this.innerHTML; // плюсик чтобы было число nen узанем номер страницы


let start =(pageNum - 1) * cardOnPages;
let end =  start + cardOnPages;


let pets = jsonPetsShuffle.slice(start, end);

center = start
divCardSpace.innerHTML = "";
let templatePetsItem = document.getElementById('template-pets-item').innerHTML,
  compiled = _.template(templatePetsItem),
  html = pets.map((ele,index)=>compiled(getDataForProductItemTemplate(ele,index))).join('');

  let cardQ = document.createElement('div');
  divCardSpace.appendChild(cardQ);

divCardSpace.innerHTML = html

  let dataPet 
  dataPet = document.createElement('div');
  dataPet.innerHTML =  ""
  dataPet.classList.add('card')
  cardQ.appendChild(dataPet)

})
}

function showPage(pageNum) {
  
}









// left1.onclick = slide.bind( this, -1 );
// right1.onclick = slide.bind( this, 1 );

// var indexArrow = 0, total = 5;

// function slide(offset) {
//   indexArrow  = Math.min( Math.max( indexArrow  + offset, 0 ), total - 1 );

//   document.querySelector( '.slider' ).innerHTML = (indexArrow  + 1 ) + ' / ' + total;

//   left1.setAttribute( 'data-state', indexArrow  === 0 ? 'disabled' : '' );
//   right1.setAttribute( 'data-state', indexArrow  === total - 1 ? 'disabled' : '' );
// }

// slide(0);



// Стрелки пагинации


;(function() {
	'use strict';
 









})();  // самозапускающаяся функция ограничивающая код
 