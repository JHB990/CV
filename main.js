'use strict'


document.addEventListener("DOMContentLoaded", function () { 
    var boton = document.querySelectorAll("button#button1");
    var botones = [document.querySelector("button#button1"), document.querySelector("button#button2"), document.querySelector("button#button3"), document.querySelector("button#button4")];
  
    botones.forEach((boton) => {
      boton.addEventListener('mouseover', function(){
        boton.style.setProperty("background-color", "#f0f8ff");
        boton.style.setProperty("border-radius", "10%"); 
        boton.style.setProperty("color", "#000000");
      });
      boton.addEventListener('mouseout', function(){
        boton.style.setProperty("background-color", "rgba(240, 248, 255, 0)");
        boton.style.setProperty("border.style", "none");
        boton.style.setProperty("color", "white");
      });
    });
});
