//consumiendo datos con fetch api
//declaracion para que se ejecute el javascript luego de que este cargado el documento
$(document).ready(function(){

    //agregar accion o evento click
    document.getElementById("formulario").addEventListener('submit', function(evento) { //()=> es abreviatura a function(), es una arrow function
        evento.preventDefault() //evitando que se ejecute algun evento existente, mientras realizamos la consulta
        
        //obtener el valor del input mediante el id
        var busqueda = document.getElementById("ingreso").value

        //validar si el elemento tiene datos o valores y si no asignar una pelicula por default
        if(busqueda.trim() === "" || busqueda == null){
            busqueda = "Castle in the sky"
        }
        
        //Fetch api o peticion para obtener las frases
        fetch(`https://studio-ghibli-films-api.herokuapp.com/api/${busqueda}`)
            .then(response => response.json())//se obtiene el json de la respuesta
            .then(data => {
                console.log(data)
                // filtrado
                // recorrido

                //llamada a la funcion
             }).catch(error => console.log(error))

             //funcion para inyectar datos en la tarjeta
    });

})

