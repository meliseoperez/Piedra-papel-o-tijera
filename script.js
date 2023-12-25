//Defino las reglas del juego en un objeto
let reglas = {
    "piedra" : "tijera",
    "papel" : "piedra",
    "tijera" : "papel",
}

//Creo una función para obtener la elección del usuario
// function obtenerEleccionUsuario(){
//     return prompt("Elige piedra, papel o tiera: ").toLowerCase();
// }


//Creo función para obtener la elección del pc
function obtnerEleccionComputadora(){
    let elecciones = ["piedra","papel","tijera"];
    let indiceAleatorio = Math.floor(Math.random() * elecciones.length);
    return elecciones[indiceAleatorio];
}

//Crea una función para determinar el ganador
function determinaGanador(eleccionUsuario, eleccionPC){
    if(eleccionUsuario === eleccionPC){
        return "¡Empate!";
    }else if(reglas[eleccionUsuario] === eleccionPC){
        return "¡Has Ganado!";
    }else{
        return "¡Has Perdido. La computadora elegió!" + eleccionPC;
    }
}

//Creo una fucnión para jugar al juego
function jugar(eleccionUsuario){
    let eleccionPC = obtnerEleccionComputadora();
    mostrarResultado('Tú elección: ' + eleccionUsuario + 
    '. Elección de la computadora: ' + eleccionPC + '. ' + determinaGanador(eleccionUsuario,eleccionPC));
}

function mostrarResultado(mensaje){
    document.getElementById('resultado').textContent=mensaje;
}
//Agrego event listeners a los botones para que el usuario pueda elegir su opcioen haciendo
//clic sobre ellos.
document.getElementById('piedra').addEventListener('click', () => jugar('piedra'));
document.getElementById('papel').addEventListener('click', () => jugar('papel'));
document.getElementById('tijera').addEventListener('click', () => jugar('tijera'));
