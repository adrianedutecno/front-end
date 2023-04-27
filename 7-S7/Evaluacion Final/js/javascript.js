//Menu con opciones
//declarar variables
var opcion, num1, num2; 

do {
    opcion = prompt("Seleccione que desea hacer: \n"+
            "1.- Calcular cual número es mayor\n"+
            "2.- Sumar\n"+
            "3.- Restar\n"+
            "4.- Multiplicar\n"+
            "5.- Dividir\n"+
            "6.- Mostar los números ingresados\n"+
            "7.- Salir");
    
    //Si el usuario ingresa cualquier opción entre 1 y 6 le solicitará que agregue dos números:
    if(opcion != 7 && opcion >= 1 && opcion < 7){
        num1 = parseInt(prompt("Ingrese el primer número"))
        num2 = parseInt(prompt("Ingrese el segundo número"))
    }
    
    // evaluar opcion para definir que hacer o a flujo ir
    // switch case key es lo que se evalua, value es el valor contra el que evaluamos
    switch (opcion) {
        case "1": //Calcular cual número es mayor
            mayor(num1,num2); // mayor(parametros, parametros)
            break;
        case "2"://suma
            suma(num1,num2)
            break;
        case "3"://restar
            restar(num1,num2)
            break;
        case "4"://multiplicar
            multiplicar(num1,num2)
            break;
        case "5"://dividir
            var resultado = dividir(num1,num2);
            alert("La división de los números es: "+resultado);
            alert("La división de los números es: "+dividir(num1,num2));
            break;
        case "6"://mostrar numeros
            //las funciones, pueden recibir los valores directamente retornados de otra funcion
            alert(mostrar(num1,num2))
            break;
        case "7"://salir
            alert("Gracias por participar")
            break;
        default://opcion por default
            alert("Elección incorrecta. Adios!")
            break;
    }
} while (opcion != "7");

//funciones log("parametros"), parseInt("1"), alert("parametros")
// function nombre(parametros) {
    
// }

// funcion para evaluar cual numero es mayor
function mayor(numero1,numero2) {
    if(numero1 > numero2){ //si la condicion se cumple, numero1 es mayor a numero2
        alert(numero1 + " es mayor que " + numero2)
    }else if(numero1 === numero2){// si no, es estrictamente igual?, con ===
        alert("Los números son iguales")
    }else{ //no sucede lo anterior?, se ejecuta las reglas del else
        alert(numero2 + " es mayor que " + numero1)
    }
}

// funcion para sumar
function suma(numero1,numero2) {
    var resultado = numero1 + numero2
    //alert(suma)
    alert("La suma de los números es: "+resultado);
}

// funcion para restar
function restar(a, b) {
    var resultado = a - b;
    alert("La resta de los números es: "+resultado)
}

//funcion para multiplicar
function multiplicar(num1,num2){
    var multiplicar = num1 * num2;
    alert("La multiplicación de los números es: "+num1*num2)
}

//funcion para dividir
function dividir(variable1, variable2) {
    return variable1 / variable2;// declarando un retorno para la funcion
}

//funcion para mostrar los números en un mensaje
function mostrar(ingreso1, ingreso2){
    return "Los números ingresados son "+ingreso1 + " y " +ingreso2;
}
