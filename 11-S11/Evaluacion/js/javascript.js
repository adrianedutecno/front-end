//consumiendo datos con fetch api
//declaracion para que se ejecute el javascript luego de que este cargado el documento
document.addEventListener('DOMContentLoaded', function() { });
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
        fetch(`https://studio-ghibli-films-api.herokuapp.com/api/`)
                    .then(response => response.json())
                    .then(data => {
                             // check si data es un objeto o un array
                            if (typeof data === 'object' && !Array.isArray(data)) {
                                //convierte data en un array
                                var dataArray = Object.values(data);
                                // se filtra las peliculas que coincidan con la busqueda
                                var filteredData = dataArray.filter(film => film.title.toLowerCase().includes(busqueda.toLowerCase()));
                                console.log(filteredData)
                                filteredData.forEach(film => {
                                    tarjeta(film)
                                });

                                // tarjeta(filteredData)
                            }
                    });

             //funcion para inyectar datos en la tarjeta
             function tarjeta(params) {
                document.getElementById("tarjeta").innerHTML = ""
                document.getElementById("tarjeta").innerHTML +=
                `
                <div class="card col-sm-12 col-md-6 mx-auto" style="width: 18rem;">
                    <img src="${params.poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p style="text-align:center; font-size:25px; color:red" class="card-text"></p>
                    <p style="text-align:center; color:green; font-weight:bold" class="card-text"></p>
                    </div>
                </div>
                `
             }
    });

})

