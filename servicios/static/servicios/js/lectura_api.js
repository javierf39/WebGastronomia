$(document).ready(function() {
    $.getJSON('http://127.0.0.1:8000/api/lista_tiposervicio', function(data) {
        var tipo = data;
        $.each(tipo, function(i, item) {
            $('#api').append("<tr><td>" + item.idTipo + "</td><td>" +
                item.nombreTipo + "</td></tr>");
        });
    });
});