$(document).ready(function() {
    // Formulario para generar RFC
    $('#rfcForm').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener los valores del formulario
        var nombre = $('#nombre').val().toUpperCase();
        var apellidoPaterno = $('#apellidoPaterno').val().toUpperCase();
        var apellidoMaterno = $('#apellidoMaterno').val().toUpperCase();
        var fechaNacimiento = $('#fechaNacimiento').val();

        // Generar el RFC
        var rfc = generarRfc(apellidoPaterno, apellidoMaterno, nombre, fechaNacimiento);

        // Mostrar el RFC generado
        $('#rfcResultado').text(rfc);
    });

    // Función para generar el RFC
    function generarRfc(apellidoPaterno, apellidoMaterno, nombre, fechaNacimiento) {
        var rfc = apellidoPaterno.substr(0, 2);
        rfc += apellidoMaterno.substr(0, 1);
        rfc += nombre.substr(0, 1);

        var fecha = new Date(fechaNacimiento);
        var year = fecha.getFullYear().toString().substr(2, 2);
        var month = ('0' + (fecha.getMonth() + 1)).slice(-2);
        var day = ('0' + fecha.getDate()).slice(-2);

        rfc += year + month + day;

        return rfc;
    }

    // Formulario para consultar usuario de la API
    $('#userApiForm').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Consultar la API
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/7',
            method: 'GET',
            success: function(data) {
                // Mostrar los datos del usuario
                $('#userName').text('Nombre: ' + data.name);
                $('#userEmail').text('Email: ' + data.email);
                $('#userPhone').text('Teléfono: ' + data.phone);
                $('#userWebsite').text('Sitio Web: ' + data.website);
            },
            error: function() {
                alert('Error al consultar la API');
            }
        });
    });
});