'use stric';




/*function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "rgba(240, 248, 255, 0)"){
        boton.style.background="red";
    }else{
        boton.style.background = "rgba(240, 248, 255, 0)";
    }
    return true;
}*/

var boton = document.querySelector("#button");

boton.addEventListener('hoover', function(){
    console.log("estas sobre li")
    boton.style.background = "gray";
});


