document.querySelector('.nosotros02').addEventListener('click',() =>{
    console.log('click!!!!')
});

ScrollReveal().reveal('.envios',{delay: 1000 });

const menu = document.querySelector('sub-menu');

menu.addEventListener('click',function(){
  alert('click');
}); 