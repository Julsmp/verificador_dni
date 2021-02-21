/* ---------------------------------- */
/* By: Julia Martínez                 */
/* Curso: Desarrollo Full-Stack (GR2) */
/* ---------------------------------- */
/* ---------------------------------- */



/* ----- VARIABLES GLOBALES ----- */

var resto = 0;
var letra_dni = undefined;
var numero_dni = undefined;
var numeros2="0123456789"; /* cadena con numeros y carácteres alfanumericos */
var numeros=numeros2+letras3 /* añado " a la cadena */
var letras2="ABCÇDEFGHIJKLMNÑOPQRSTUVWXYZ!@$%&/()<>?¿‚¡¨·";
var letras3='"' /* para añadir el carácter " */
var letras=letras2+letras3 /* añado " a la cadena */
var valoracion="" /* Definirá correcto/no correcto*/
var contador=0;
var letra_resto=""; 


/* ----- FIN VARIABLES GLOBALES ----- */



/* --- FUNCIONES PARA COMPROBAR CAMPOS --- */

function tiene_numeros(texto){ /* Comprueba si tiene números o carácteres alfanúmericos */

   for(i=0; i<texto.length; i++){
        texto = texto.toUpperCase();
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
            return 1; /* El campo contiene números */
      }
   }
   return 0; /* El campo no contiene números */
}

function tiene_letras(texto){ /* Comprueba si tiene letras o carácteres alfanúmericos */
    texto = texto.toUpperCase();
    for(i=0; i<texto.length; i++){
        if (letras.indexOf(texto.charAt(i),0)!=-1){
            return 1; /* El campo contiene letras */
        }
    }
    return 0; /* El campo no contiene letras */
}

function validar_Campos() { /* Comprueba si la información introducida en cada campo es válida, 
    lanza alertas de error. Si todo es correcto, calcula la letra correcta. */

    letra_dni = document.Verificar_DNI.letraintroducida.value;
    numero_dni = document.Verificar_DNI.numerointroducido.value;

    verificar_numero = tiene_letras(numero_dni);
    verificar_letra = tiene_numeros(letra_dni);

    if (verificar_numero == 1 ){
        alert("No puedes introducir letras o carácteres especiales en la casilla númerica");
        Reiniciar_Formulario();
    } 
    
    else {
        if (numero_dni.length != 8) {
            alert("El número ha de tener 8 carácteres");
            Reiniciar_Formulario();
        } 
        
        else {
            if (verificar_letra == 1 ){
                alert("Debes añadir la letra en la segunda casilla");
                Reiniciar_Formulario();
            }
            else{
                if (letra_dni.length!=1){
                    alert("Debes introducir almenos una letra");
                    Reiniciar_Formulario();
                }

                else{
                    calcular_resto();
                }
            }
        }
    }

}

/* --- FIN FUNCIONES PARA COMPROBAR CAMPOS --- */



/* --- FUNCIONES PARA COMPROBAR LETRA --- */

function calcular_resto() {  /* Calcula el resto del dni */
    resto = numero_dni % 23 ;
    console.log("El resto es:" + resto)
    comprobar_letra();
}

function comprobar_letra() { /* Según la relación entre números y letras, calcula la letra correcta y compara con la introducida. */

    /* Según el resto, lo relaciono con la letra correspondiente */
    if (resto == 0){
        letra_resto = "T";
    }

    else if (resto == 1){
        letra_resto = "R";
    }
    else if (resto == 2){
        letra_resto = "W";
    }

    else if (resto == 3){
        letra_resto = "A";
    }

    else if (resto == 4){
        letra_resto = "G";
    }

    else if (resto == 5){
        letra_resto = "M";
    }

    else if (resto == 6){
        letra_resto = "Y";
    }

    else if (resto == 7){
        letra_resto = "F";
    }

    else if (resto == 8){
        letra_resto = "P";
    }

    else if (resto == 9){
        letra_resto = "D";
    }

    else if (resto == 10){
        letra_resto = "X";
    }

    else if (resto == 11){
        letra_resto = "B";
    }

    else if (resto == 12){
        letra_resto = "N";
    }

    else if (resto == 13){
        letra_resto = "J";
    }

    else if (resto == 14){
        letra_resto = "Z";
    }

    else if (resto == 15){
        letra_resto = "S";
    }

    else if (resto == 16){
        letra_resto = "Q";
    }

    else if (resto == 17){
        letra_resto = "W";
    }

    else if (resto == 18){
        letra_resto = "H";
    }

    else if (resto == 19){
        letra_resto = "L";
    }

    else if (resto == 20){
        letra_resto = "C";
    }

    else if (resto == 21){
        letra_resto = "K";
    }

    else if (resto == 22){
        letra_resto = "E";
    } else { 
        alert("Ha habido un error: El resto no tiene sentido.");
    }

    /* Creo alerta informando si las dos letras coinciden */
    if (letra_dni.toUpperCase() == letra_resto){
        añadir_letra_lista();
        añadir_numeros_lista();
        alert("La letra qué corresponde al DNI introducido es " + letra_resto + ". \nLa letra introducida por el usuario es: " + letra_dni.toUpperCase() + "\nPor tanto, el DNI es correcto.");
        valoracion="Correcto";
    } else {
        añadir_letra_lista();
        añadir_numeros_lista();
        alert("La letra qué corresponde al DNI introducido es " + letra_resto + ". \nLa letra introducida por el usuario es: " + letra_dni.toUpperCase() + "\nPor tanto, el DNI NO es correcto.");
        valoracion="No correcto";
    }

    /*muestro la sección oculta donde imprimiré*/
    document.getElementById("Seccion_resultados").style.display="block";
    document.getElementById("seccion_lista").style.display="block";

    /*Llamo a la función que imprimirá en pantalla*/
    ImprimirResultado();
}

/* --- FIN FUNCIONES PARA COMPROBAR LETRA --- */



/* --- FUNCIONES ARRAY --- */
//IN PROGRESS....
//..
var lista_letras = []
var lista_numeros = []

function añadir_letra_lista() {
    let letra_mayus = letra_dni.toUpperCase();
    console.log(letra_dni);
    lista_letras.push(letra_mayus);
    console.log(lista_letras);
}

function añadir_numeros_lista() {
    console.log(numero_dni);
    lista_numeros.push(numero_dni);
    console.log(lista_numeros);
}

/* --- FIN FUNCIONES ARRAY --- */


/* --- FUNCIONES IMPRIMIR EN PRIMERA SECCIÓN --- */

function ImprimirResultado(){

    /*Añado contenido*/

    let texto=document.getElementById("Resultados")
    let letra_resultado=document.getElementById("letra_resultado")

    if (valoracion=="Correcto"){
        letra_resultado.style.color = "#007a08";
        letra_resultado.innerHTML=letra_resto.toUpperCase();
    }

    else{
        letra_resultado.style.fontSize = "43px"
        letra_resultado.style.color = "#ff0000";
        letra_resultado.innerHTML=letra_resto.toUpperCase();    
    }

    if (valoracion=="Correcto"){
        texto.style.color = "#007a08";
        texto.innerHTML="El DNI " + numero_dni + letra_dni.toUpperCase() + " es correcto";
    }

    else{
        texto.style.color = "#ff0000";
        texto.innerHTML="El DNI " + numero_dni + letra_dni.toUpperCase() + " NO es correcto";
    }

    document.getElementById("formulario").addEventListener("click", function(event){
        event.preventDefault();
    })

    ImprimirLISTA();
}

/* --- FIN FUNCIONES IMPRIMIR EN PRIMERA SECCIÓN --- */



/* --- FUNCIONES IMPRIMIR EN SECCIÓN DERECHA (LISTA) --- */

function ImprimirLISTA(){

    /*Añado contenido*/

    let numeracion = contador+1; /* Para numerar los dnis introducidos */

    let texto_derecha=document.getElementById(id="elem1");


    if (valoracion=="Correcto"){
        texto_derecha.style.color = "#007a08";
        nuevo_texto = numeracion + ". " + lista_numeros[contador] + lista_letras[contador] + " ✓";
        texto_derecha.innerHTML= nuevo_texto;
    }

    else{
        texto_derecha.style.color = "#ff0000";
        nuevo_texto = numeracion + ". " + lista_numeros[contador] + lista_letras[contador] + " ✘";
        texto_derecha.innerHTML = nuevo_texto;
    }

    if (contador >= 1){
        console.log(contador);
        contador++;
        nuevaLinea();
    }

    else {
        console.log(contador);
        contador++;
    }

}

function nuevaLinea() {

    // Crear nodo de tipo Element
    var elemento = document.createElement("p");
    // Crear nodo de tipo Text
    var contenidolinea = document.createTextNode(nuevo_texto);
    // Añadir el nodo contenido como hijo del nodo titulo
    elemento.appendChild(contenidolinea);

    // Añadir el nodo titulo como hijo del head
    elem1.appendChild(elemento);
}

/* --- FIN FUNCIONES IMPRIMIR EN SECCIÓN DERECHA (LISTA) --- */


/* --- OTRAS FUNCIONES --- */

function Reiniciar_Formulario() { /* Reinicia la info del formulario */
    document.getElementById("formulario").reset()
}