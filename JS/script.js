let contador = 0; // creamos una variable para llevar la cuenta 

const spanNumero= document.getElementById("numero"); // seleccionamos elementos de html usando sus ides  

const btnAumentar = document.getElementById("btn-aumentar");

btnAumentar.addEventListener("click", () => {     //escuchamos cuando alguien haga click en el boton 
    contador++;   //aumentamos el valor en 1
    spanNumero.innerText = contador; 
}); 