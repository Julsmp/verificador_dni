/* ----- Función verificada ----- */

function nombre_funcion() {

    /* Obtengo el DNI introducido */
    let user_dni=document.Verificar_DNI.user_dni.value;

    /* Verifico que el DNI introducido tenga 9 carácteres */
    if (user_dni.length != 9) {
        alert("El DNI introducido no tiene 9 carácteres")
    } else {

        let todas_letras = "abcdefghyjklmnñopqrstuvwxyz"; /* string con abecedario */
        let todos_numeros = "0123456789"; /* string con todos los números */

        let user_letra = user_dni[8]; /* aparto el carácter 9 */
        let user_letra_minuscula = user_letra.toLowerCase(); /* lo convierto a minusculas */
        let user_numero = user_dni.substr(0,8); /* aparto los números del DNI*/

        console.log(user_letra_minuscula);
        console.log(user_numero);
        
        let resto = user_numero % 23 ; /* Obtengo el resto de la división con 23 */
        alert(resto); /* ----- Test IMPRIMIR RESTO ----- */
    }
}

function comprobar_letra() {
    let resto_0 = "T";
    let resto_1 = "R";
    let resto_2 = "W";
    let resto_3 = "A";
    let resto_4 = "G";
    let resto_5 = "M";
    let resto_6 = "Y";
    let resto_7 = "F";
    let resto_8 = "P";
    let resto_9 = "D";
    let resto_10 = "X";
    let resto_11 = "B";
    let resto_12 = "N";
    let resto_13 = "J";
    let resto_14 = "Z";
    let resto_15 = "S";
    let resto_16 = "Q";
    let resto_17 = "V";
    let resto_18 = "H";
    let resto_19 = "L";
    let resto_20 = "C";
    let resto_21 = "K";
    let resto_22 = "E";
}