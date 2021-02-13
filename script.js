/* ----- Función verificada ----- */

var resto = 0

function nombre_funcion() {

    /* Obtengo el DNI introducido */
    let user_dni=document.Verificar_DNI.user_dni.value;

    /* Verifico que el DNI introducido tenga 9 carácteres */
    if (user_dni.length != 9) {
        alert("El DNI introducido no tiene 9 carácteres")
    } else {
        let todas_letras = "ABCDEFGHIJKLMNOPQRSTVWXYZ"; /* string con abecedario */
        let todos_numeros = "0123456789"; /* string con todos los números */

        let user_letra = user_dni[8]; /* aparto el carácter 9 */
        let user_letra_mayuscula = user_letra.toUpperCase(); /* lo convierto a minusculas */
        let user_numero = user_dni.substr(0,8); /* aparto los números del DNI*/

        console.log(user_letra_minuscula);
        console.log(user_numero);
        
        resto = user_numero % 23 ; /* Obtengo el resto de la división con 23 */
        alert(resto); /* ----- Test IMPRIMIR RESTO ----- */
        alert("comprobando");
        comprobar_letra();
        console.log("comprobando2");
    }
}

function comprobar_letra() {
    console.log("Ejecutando Función comprobar_letra")

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
    } else { console.log("Ha habido un error")}

    console.log("La letra qué corresponde al dni introducido es " + letra_resto + ".")
}