$(document).ready(function() {
    $.getJSON('http://127.0.0.1:8000/api/lista_servicio', function(data) {
        var servicio = data;
        $.each(servicio, function(i, item) {
            $('#api_ser').append("<tr><td>" + item.idServicio + "</td><td>" +
                item.nombreServicio + "</td><td>" + item.descrpcion + "</td></tr>");
        });
    });
});