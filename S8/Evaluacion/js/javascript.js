//cajero automatico
//Cada uno de los clientes de nuestro banco contará 
//con un nombre, un identificador, 
//una clave y un saldo en su cuenta.
class Cliente{
    constructor(nombre,rut,clave,saldo){
        this.nombre = nombre
        this.rut = rut
        this.clave = clave
        this.saldo = saldo
    }
}

var cliente1 = new Cliente("Fulanito","270809001","password",30000)
var cliente2 = new Cliente("Juan","270809002","password1",40000)
var cliente3 = new Cliente("Maria","270809003","password2",50000)

//indices parten desde 0 a n-1 siendo n la cantidad de elementos, (0,1,2)
var listaClientes = [cliente1,cliente2,cliente3]// tamaño 3, existen 3 elementos

//pedir ingreso de datos
//ingrese el identificador y la clave
alert("Bienvenido, NOMBRE BANCO")
var rutCliente = prompt("Ingrese su rut sin guión, Ejemplo: 27080007K")
var claveCliente = prompt("Ingrese su clave")

//validar los datos ingresados
//Cuando se ingrese el identificador y la clave, 
//se revisará si coincide con alguno de los clientes 
//registrados. 
//Si no coincide, se mostrará un mensaje de error.
// cliente1.clave
// cliente2.rut
// cliente3.saldo
// cliente3.direccion
var permiso = false
var cliente
for (let indice = 0; indice < listaClientes.length; indice++) {
    if(listaClientes[indice].rut == rutCliente && listaClientes[indice].clave == claveCliente){
        permiso = true
        alert("Hola, bienvenido "+listaClientes[indice].nombre)
        cliente = listaClientes[indice]
        menu(cliente)
        break;
    }
}
//saldo
//realizar giros
//depositos

//un menú en el cual el usuario podrá decidir 
//que desea hacer (deposito, giro, ver su saldo o salir). 
//El menú se repite hasta que el usuario elija salir.
function menu(cliente) {
    let opcion = ""
    do {
        opcion = prompt("Seleccione que desea hacer\n"+
                            "1.- Ver saldo\n"+
                            "2.- Realizar giro\n"+
                            "3.- Realizar deposito\n"+
                            "4.- Salir")

        switch (opcion) {
            case "1": //ver saldo
                //verSaldo()
                alert("Su saldo actual es: "+cliente.saldo)
                break;
            case "2"://realizar giro
                //realizarGiro()
                
                break;
            case "3"://realizar deposito
                //realizarDeposito()
                break;
            case "4"://salir

                break;
            default://no se cumple ningun caso, mensaje por default
                break;
        }
    } while (opcion != "4");//mientras opcion sea diferente de 4
}

//for in es para recorrer objetos
// var object = { //objeto de tipo JSON
//     a: 1,// key:value
//     b: 2,
//     c: 3
// }
// for (const key in object) {
//     alert(object[key])
// }
