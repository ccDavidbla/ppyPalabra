let intento = 6
let palabra = "APPLE"

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
            SPAN.style.background = "green";
            SPAN.innerHTML = INTENTO[i]

        console.log ( INTENTO[ i ], "green");
        } else if ( palabra.includes(INTENTO[i])){
            SPAN.style.background = "yellow";
            SPAN.innerHTML = INTENTO[i]
            console.log (INTENTO[i], "yellow")
        } else{
            SPAN.style.background = "gray";
            SPAN.innerHTML = INTENTO[i]
            console.log ( INTENTO[i], "gray")
        }
        ROW.appendChild(SPAN)

    }
    GRID.appendChild(ROW)
    if (intento===palabra){
        terminar("<h1>GANASTE!!!:)</h1>")
        
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