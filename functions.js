//analisis:
/*
crear letras aleatorias
pedir cadena de texto
leerla
guardarla
generar aleatorio y comparar 
comparar.¿con qué? datos guardados
if continene caracter = true
else =false
boolean
martes 04/06/2019
3:15am debo dormir
3:30 am, enough

*/
// miercoles 05/06/22:03
//definimos los caracteres de la lista a escoger


function cogerLetra(){
    let letra = "estossonloscaracteresaleatoriosaescoger";
    return letra.charAt(Math.random()*letra.length);
    /* Coloco la recogida de los datos en una funcion, asi solo debo llamar a la funcion para mostrar los datos del random */
    /*Metodo charArt nos enseña el caracter en la posicion de designamos. Al no querer que sea una posicion fija, incluyo el metodo random dentro de los parametros de ChatArt*/
    /*pk multiplicar? le digo que pase la random sobre el length de todos los caracteres de la lista. Me ha costado buscar y encontra la formula */

}
//guardamos datos en cogerletra
console.log(cogerLetra());//comprobar
//me genera un random de 'let letra', correcto pues

let frase = prompt("Escriba una frase");
let aleatorioGenerado = cogerLetra();
// si coincide, y si no. if /else
if(frase.indexOf(aleatorioGenerado) >=0){
    alert ("true");

}
else{
    alert("false");
}
/* si alguno de los caracteres escritos en el prompt coincide con el UNICO caracter que random a generado (egiual o mas grande >=)
devuelve un true, si no un false. Jolin...me ha costado un mojon este! Todo hecho por mi hasta que ha llegado la hora del if/else. No cortado y pegado, pero 
codigo encontrado en Stockflow
*/