$(document).ready(function () {
    // Carica la lista dei thread all'avvio della pagina
    loadThreadList(1); // Carica la prima pagina all'avvio

    console.log($('#thread-list-container'));

    $('#filter-form').submit(function (event) {
        // Evita il comportamento predefinito del form
        event.preventDefault();

        // Carica la lista dei thread tramite AJAX
        loadThreadList(1);
    });

    $('#filter-form button[type="reset"]').on('click', function () {
        // Ripristina i valori predefiniti dei filtri
        $('#filter-form')[0].reset();
        
        // Richiama la funzione loadThreadList per aggiornare la lista dei thread
        loadThreadList(1);
    });
});

$(document).on('click', '.pagination a', function (e) {
    e.preventDefault();

    // Ottieni il numero della pagina dal link
    var page = $(this).attr('href').split('page=')[1];

    // Carica la lista dei thread tramite AJAX
    loadThreadList(page);
});

function loadThreadList(page) {
    let formData = $('#filter-form').serialize();

    let hasFilter = formData.length > 0;

    $.ajax({
        url: '/post/show?page=' + page,
        type: 'GET',
        data: formData,
        dataType: 'json',
        success: function (response) {
            // Aggiorna il contenitore dei thread con i dati ricevuti da response.data
            $('#thread-list-container').html(response.data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}