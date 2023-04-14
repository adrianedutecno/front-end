/* 
// declaracion de variables
//tipo identificador = valor
//var es variable global
var identificador1 = "valor"; // String - texto
var identificador2 = 10; // int - numero entero sin decimales
var identificador3 = 10.5; // float - decimales o punto flotante
var identificador4 = true; // boolean - true or false
var identificador5 = 'c'; // character - un caracter

//let es variable local
let variableLocal1 = "valor";
let variableLocal2 = 10;
let variableLocal3 = 10.5;
let variableLocal4 = false;
let variableLocal5 = 'c';

//log en programacion es loguear, informar mediante la consola o un archivo
console.log(identificador1);

//concatenación de String o cadenas de texto
//"10"+"5" = "105"
*/

// Considerando los conocimientos adquiridos durante esta CUE, 
// deberás solicitar el ingreso de dos números y 
// calcular cual es mayor o si tienen el mismo valor. 
// En cualquier caso, debes mostrar un mensaje indicando cuál de los números es mayor, 
// por ejemplo, si ingresamos 5 y 8, 8 es mayor que 5

//ingreso de numeros o ingreso de datos
var numero1 = prompt("Ingrese el primer número"); // "10"
var numero2 = prompt("Ingrese el segundo número");// "5"

//convertir o castear (cast), parse los numeros a tipo int
//parseInt("String") //funcion que convierte un String o candena de texto a int
numero1 = parseInt(numero1); // se parsea y se acumula en la misma variable existentes
numero2 = parseInt(numero2); //se parsea y se acumula en la misma variable existente

//calcular cual es mayor o si tienen el mismo valor
//estructuras condicionales if, else, else if, switch case
//if(condicion) else if(condicion)
if(numero1 > numero2){ //si la condicion se cumple, numero1 es mayor a numero2
    alert(numero1 + " es mayor que " + numero2)
}else if(numero1 === numero2){// si no, es estrictamente igual?, con ===
    alert("Los números son iguales")
}else{ //no sucede lo anterior?, se ejecuta las reglas del else
    alert(numero2 + " es mayor que " + numero1)
}

//alerta en el nagevador
alert(numero1+numero2);