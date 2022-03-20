'use strict'


document.addEventListener("DOMContentLoaded", function () { 
    var boton = document.querySelector(".button");
    
    boton.addEventListener('mouseover', function(){
      boton.style.background = "#f0f8ff";
      boton.style.setProperty("border-radius", "10%"); 
      boton.style.setProperty("color", "black");
    });
    boton.addEventListener('mouseout', function(){
      boton.style.setProperty("background-color", "rgba(240, 248, 255, 0)");
      boton.style.setProperty("border.style", "none");
      boton.style.setProperty("color", "white");
    });
});
