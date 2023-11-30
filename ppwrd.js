let intento = 6
let diccionario= ["CINCO", "MESSI", "MISIO", "HIJOS", "HIGOS"]
let palabra = diccionario[Math.floor(Math.random()* diccionario.length)];
console.log(palabra)
const BUTTON = document.getElementById("guess-button")

BUTTON. addEventListener("click", intentar);

function intentar(){
    const GRID = document.getElementById("grid");
    const  ROW= document.createElement("div");
    ROW.className= "row";

    const INTENTO= leerIntento()

    if(INTENTO.length !==5){
        alert("palabra de 5 letras")
        return

    }
    for ( i in palabra){
    const  SPAN= document.createElement("span");
    SPAN.className= "letter"; 

        if( palabra [i]=== INTENTO[i]){
            SPAN.style.background = "#79b851";
            SPAN.innerHTML = INTENTO[i]
        } else if ( palabra.includes(INTENTO[i])){
            SPAN.style.background = "#f3c237";
            SPAN.innerHTML = INTENTO[i]
        } else{
            SPAN.style.background = "#a4aec4";
            SPAN.innerHTML = INTENTO[i]
        }
        ROW.appendChild(SPAN)

    }
    GRID.appendChild(ROW)

    if(palabra[i]===INTENTO[i]){
        terminar("<h1>GANASTE :)</h1>")
        return
    }
    intento--
    if(intento === 0){
        terminar("<h1>PERDISTE!:_(</h1>")
        return
    }
}
function leerIntento(){
    const VALOR = document.getElementById("guess-input").value.toUpperCase();
    return VALOR;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}