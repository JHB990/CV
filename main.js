'use strict'


document.addEventListener("DOMContentLoaded", function () { 
    // Header
    var boton = document.querySelectorAll("button#button");
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

    //Welcome
  
    var circuloBtn = document.querySelector("button#circulo");
    
    circuloBtn.addEventListener('click', function(){
      console.log("click"); //aqui ocurrira la magia 
      gsap.to("#circulo", {
        duration: 3,
        y: 500,
        backgroundColor: 'rgba(62, 93, 231, 0.63)',
        borderRadius: '50%',
        border: '0px solid white',
        ease: 'bounce'
      });
    });

    circuloBtn.addEventListener('mouseover', function(){
      circuloBtn.style.setProperty("background-color", "#e1e5e981");
    });
    circuloBtn.addEventListener('mouseout', function(){
      circuloBtn.style.setProperty("background-color", "rgba(240, 248, 255, 0)");
    });
});
