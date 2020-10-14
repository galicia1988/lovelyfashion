
ScrollReveal().reveal('.envios',{delay: 1000 });
ScrollReveal().reveal('.whatsapp',{delay: 1950 });

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