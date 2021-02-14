/* ----- Declaro variables globales ----- */

var resto = 0;
var letra_dni = undefined;
var numero_dni = undefined;
var numeros="0123456789";
var letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/* ----- Fin variables globales ----- */


function tiene_numeros(texto){

   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1; /* El campo contiene números */
      }
   }
   return 0; /* El campo no contiene números */
}

function tiene_letras(texto){
    texto = texto.toUpperCase();
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1; /* El campo contiene letras */
       }
    }
    return 0; /* El campo no contiene letras */
}

function validar_Campos() {

    letra_dni = document.Verificar_DNI.letraintroducida.value;
    numero_dni = document.Verificar_DNI.numerointroducido.value;

    verificar_numero = tiene_letras(numero_dni);
    verificar_letra = tiene_numeros(letra_dni);

    if (verificar_numero == 1 ){
        alert("No puedes introducir letras en la casilla númerica");
        Reiniciar_Formulario();
    } 
    
    else {
        if (numero_dni.length != 8) {
            alert("El número ha de tener 8 carácteres");
            Reiniciar_Formulario();
        } 
        
        else {
            if (verificar_letra == 1 ){
                alert("No puedes introducir números en la casilla de la letra");
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

function calcular_resto() {    
    resto = numero_dni % 23 ; /* Obtengo el resto de la división con 23 */
    console.log("El resto es: " + resto); /* ----- Test IMPRIMIR RESTO ----- */
    comprobar_letra();
    console.log(numero_dni);
    console.log(letra_dni);
}

function comprobar_letra() {

    if (resto == 0){
        var letra_resto = "T";
    }

    else if (resto == 1){
        var letra_resto = "R";
    }
    else if (resto == 2){
        var letra_resto = "W";
    }

    else if (resto == 3){
        var letra_resto = "A";
    }

    else if (resto == 4){
        var letra_resto = "G";
    }

    else if (resto == 5){
        var letra_resto = "M";
    }

    else if (resto == 6){
        var letra_resto = "Y";
    }

    else if (resto == 7){
        var letra_resto = "F";
    }

    else if (resto == 8){
        var letra_resto = "P";
    }

    else if (resto == 9){
        var letra_resto = "D";
    }

    else if (resto == 10){
        var letra_resto = "X";
    }

    else if (resto == 11){
        var letra_resto = "B";
    }

    else if (resto == 12){
        var letra_resto = "N";
    }

    else if (resto == 13){
        var letra_resto = "J";
    }

    else if (resto == 14){
        var letra_resto = "Z";
    }

    else if (resto == 15){
        var letra_resto = "S";
    }

    else if (resto == 16){
        var letra_resto = "Q";
    }

    else if (resto == 17){
        var letra_resto = "W";
    }

    else if (resto == 18){
        var letra_resto = "H";
    }

    else if (resto == 19){
        var letra_resto = "L";
    }

    else if (resto == 20){
        var letra_resto = "C";
    }

    else if (resto == 21){
        var letra_resto = "K";
    }

    else if (resto == 22){
        var letra_resto = "E";
    } else { console.log("Ha habido un error: El resto no tiene sentido.")}

    console.log("La letra qué corresponde al dni introducido es " + letra_resto + ".");
    console.log("La letra introducida por el usuario es: " + letra_dni);

    if (letra_dni.toUpperCase() == letra_resto){
        alert("La letra introducida corresponde al número");
    } else {
        alert("La letra introducida NO corresponde al número");
    }
}

function Reiniciar_Formulario() {
    document.getElementById("formulario").reset()
}