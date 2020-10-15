
function Mostrar(){
  document.getElementById("nosotros02").style.display ="block";
}
function Ocultar(){
  document.getElementById("nosotros02").style.display ="none";
}

function mostrar_ocultar(){
  var nosotros02 = document.getElementById("nosotros02");

  if(nosotros02.style.display == "none"){
    Mostrar();
  }
  else{
    Ocultar();
  }
}


function Mostrar1(){
  document.getElementById("contactanos02").style.display ="block"
}
function Ocultar1(){
  document.getElementById("contactanos02").style.display ="none"
}

function mostrar1_ocultar1(){
  var contactanos02 = document.getElementById("contactanos02");

  if(contactanos02.style.display =="none"){
    Mostrar1();
  }
  else{
    Ocultar1();
  }
}

let animado = document.querySelectorAll(".animadobanners");
function mostararScroll(){
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i<animado.length; i++){
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado -300 < scrollTop){
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    }
  }
}
window.addEventListener('scroll', mostararScroll);

let animadoDerecha = document.querySelectorAll(".animadoDerecha");
function mostrarDerecha(){
  let scrollTop = document.documentElement.scrollTop;
  for ( var i=0; i<animadoDerecha.length; i++){
    let alturaD = animadoDerecha[i].offsetTop;
    if(alturaD -550 < scrollTop){
      animadoDerecha[i].style.opacity = 1;
      animadoDerecha[i].classList.add("mostrarDerecha");
    }
  }
}
window.addEventListener('scroll',mostrarDerecha);