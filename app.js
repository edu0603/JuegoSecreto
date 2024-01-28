let numeroSecreto = 0;
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//con elemento y texto estamos dandole la opcion de utiizarlo con h1,p,textos como tal
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //verificar si el usuario acerto correctamente
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 

    
    if(numeroUsuario === numeroSecreto){
    //Forma mas sencila de hacer un if reducido en codigo -->
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    //el usuario no acerto
    }else if(numeroSecreto < numeroUsuario){
        asignarTextoElemento('p','El numero secreto es menor')
    }else
     {
        asignarTextoElemento('p','El numero es mayor')
    }
    intentos ++;
    LimpiarCaja();
    return;
    
};

function LimpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}



function asignarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(NumeroGenerado);
    console.log(listaNumerosSorteados);

    //si el numero sorteado esta en la lista 
    if (NumeroGenerado.length == numeroMaximo){
        asignarTextoElemento('p','ya se generaron todos los numeros en la lista!')

    }else{

        //si el numero generado esta en la lista 
        if(listaNumerosSorteados.includes(NumeroGenerado)){
            listaNumerosSorteados.push(NumeroGenerado);
            return asignarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;

        }

    }

        
}   

function CondicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Selecciona un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = asignarNumeroSecreto();
    intentos ++;
}

function ReiniciarJuego() {
    //limpiar caja
    LimpiarCaja();
    //Indicar mensaje de intervalos de numero
    //Generar el numero aleatorio
    //Deshabilitar el boton del nuevo juego
    CondicionesIniciales();
    //Inicializar el numero intervalo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

CondicionesIniciales();