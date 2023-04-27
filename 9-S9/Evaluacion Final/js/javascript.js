//ejecutar un evento submit cuando se realice la accion
$(document).ready(function(){
    $("#reserva").submit(function (event){
        //evitando cualquier evento por default que tenga el formulario
        event.preventDefault();
        console.log("Submit event ejecutado");
        //obteniendo los valores de los input del html, para el formulario de reserva
        //se estan obteniendo a traves del id
        var nombre = $("#nombreReserva").val();
        var correo = $("#correoReserva").val();
        var telefono = $("#telefonoReserva").val()
        var fecha = $("#fechaReserva").val()
        var hora = $("#tefonoReserva").val()
        var asistentes = $("#asistentesReserva").val()
        var check = $("#exampleCheck1Reserva").prop("checked");

        //validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
        if(nombre == ""){
            alert("El campo nombre es obligatorio")
        }else if(correo == "" || correo == null){
            alert("El campo correo es obligatorio")
        }else if(telefono == ""){
            alert("El campo telefono es obligatorio")
        }else if(fecha == ""){
            alert("El campo fecha es obligatorio")
        }else if(hora == ""){
            alert("El campo hora es obligatorio")
        }else if(asistentes == ""){
            alert("El campo asistentes es obligatorio")
        }else if(!check){
            alert("Debe aceptar los terminos y condiciones")
        }
    })

    $("#submitReservaModal").click(function(e) {
        //Evitando cualquier evento por default que tenga el formulario
        e.preventDefault();
        console.log("Submit event ejecutado");

        //Obteniendo los valores de los input del html, para el formulario de reserva
        //Se estan obteniendo a traves del id
        var nombre = $("#nombreReservaModal").val();
        var correo = $("#correoReservaModal").val();
        var telefono = $("#telefonoReservaModal").val()
        var fecha = $("#fechaReservaModal").val()
        var hora = $("#tefonoReservaModal").val()
        var asistentes = $("#asistentesReservaModal").val()
        var check = $("#exampleCheck1ReservaModal").prop("checked");

        //validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
        if(nombre.trim() === ""){
            var alertDiv = createAlert('El campo nombre es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(correo == "" || correo == null){
            // alert("El campo correo es obligatorio")
            var alertDiv = createAlert('El campo correo es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(telefono == ""){
            // alert("El campo telefono es obligatorio")
            var alertDiv = createAlert('El campo telefono es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(fecha == ""){
            // alert("El campo fecha es obligatorio")
            var alertDiv = createAlert('El campo fecha es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(hora == ""){
            // alert("El campo hora es obligatorio")
            var alertDiv = createAlert('El campo hora es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(asistentes == ""){
            // alert("El campo asistentes es obligatorio")
            var alertDiv = createAlert('El campo asistentes es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(!check){
            //alert("Debe aceptar los terminos y condiciones")
            var alertDiv = createAlert('Debe aceptar los terminos y condiciones');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }
        // $("#exampleModal").modal("hide");
    })

    // Crear un nuevo elemento de alerta
    function createAlert(message) {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger';
        alertDiv.textContent = message;
        return alertDiv;
    } 
    // Obtener el elemento por id reservaModal
    var modal = document.getElementById('reservaModal');

    // Función para borrar la última alerta añadida
    function clearLastAlert() {
        var lastAlert = modal.querySelector('.alert');
        if (lastAlert) {
            lastAlert.remove();
        }
    }
    // Función para llamar a la función clearLastAlert después de un retraso especificado
    function delayedClearLastAlert(delay) {
        setTimeout(function() {
          clearLastAlert();
        }, delay);
      }
});