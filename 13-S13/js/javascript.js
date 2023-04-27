// algunos elementos de ejemplo estan comentados

// obtener elementos con id tabla y id contenido
let tabla = document.getElementById("tabla");
let contenido = document.getElementById("contenido");
let carta = document.getElementById("carta");

    // consumo de api con fetch
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        mostrarTabla(data);// invocando la funcion mostrarTabla()
    }).catch(error => console.log(error))

    //funcion para obtener los datos del digimon y mostrarlo en la tabla con id tabla y id contenido
    function mostrarTabla(response) {
        //limpiar el elemento con id contenido
        contenido.innerHTML = "";
        //recorrer los datos obtenidos de la api

        //forEach(temp => {//temp es un objeto temporal que contiene los datos del digimon
        
        // response.forEach(temp => {
        //     contenido.innerHTML += 
        //     `<td>${temp.name}</td>
        //     <td><img src="${temp.img}" alt="" width="50px" height="50px"></td>
        //     <td>${temp.level}</td>
        //     `
        // });
        
        //forEach(temp => {//temp es un objeto temporal que

        for(let temp of response){//temp es un objeto temporal que contiene los datos del digimon
            //para incrustar valores en el contenido dinamicamente se necesita
            // `` comillas francesas y la anotación o estructura ${temp.key}
            contenido.innerHTML += 
            `<td>${temp.name}</td>
            <td><img src="${temp.img}" alt="" width="50px" height="50px"></td>
            <td>${temp.level}</td>
            `
        }
    }

    //funcion para obtener los datos del digimon y mostrarlo en la div con id carta
    //utilizando el metodo fetch y el id busqueda en el input 
    //para obtener los datos ingresados o de busqueda
    function mostrarCarta() {
        //obtener el valor del input con el id busqueda
        let busqueda = document.getElementById("busqueda").value.toLowerCase();
        console.log(busqueda);
        // consumo de api con fetch
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                construirCarta(data);// invocando la funcion construirCarta(data)
            }).catch(error => console.log(error))
        
    }

    //funcion para crear la carta del digimon dinamicamente
    function construirCarta(params) {
        //ocular tabla con id tabla y tbody con id contenido de la tabla
        tabla = document.getElementById("tabla")
        contenido = document.getElementById("contenido")
        if(tabla != null && contenido!= null){
            tabla.style.display = "none";
            contenido.style.display = "none";
            tabla.innerHTML = "";
            contenido.innerHTML = "";
        }
        carta.innerHTML = "";
        //ciclo para recorrer los datos obtenidos de la api
        for(let temp of params){//temp es un objeto temporal que contiene los datos del digimon
            carta.innerHTML +=
            ` 
            <div class="card col-sm-12 col-md-6 mx-auto" style="width: 18rem;">
                <img src="${temp.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${temp.name}</h5>
                <p class="card-text">Nivel: ${temp.level}</p>
                <a href="index.html" class="btn btn-primary">Volver</a>
                </div>
            </div>
            `
        }
    }

    // Consumo de API con Fetch
function mostrarCartas(params) {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then(response => response.json())
    .then(datos => {
        //console.log(datos);
        mostrarTarjetas(datos);
    }).catch(error => console.log(error))
}

//Funcion para obtener los datos del Digimon y mostrarlo en la tabla con ID tabla e ID contenido
function mostrarTarjetas(response) {
    let tarjetas = document.getElementById("tarjetas");
    tabla = document.getElementById("tabla")
        contenido = document.getElementById("contenido")
        if(tabla != null && contenido!= null){
            tabla.style.display = "none";
            contenido.style.display = "none";
            tabla.innerHTML = "";
            contenido.innerHTML = "";
        }
    tarjetas.innerHTML = "";
    for (let temp of response) {
        tarjetas.innerHTML +=
            `
            <div class="card col-sm-12 col-md-6 mx-auto" style="width: 18rem;">
            <img src="${temp.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <p style="text-align:center; font-size:25px; color:red" class="card-text">${temp.name}</p>
            <p style="text-align:center; color:green; font-weight:bold" class="card-text">${temp.level}</p>
            </div>
            </div>
            `

    }

}