$(document).ready(function () {
    // Attiva il click sugli elementi della paginazione
    $('.pagination a').on('click', function (e) {
        e.preventDefault();

        // Recupera il numero di pagina dal link
        var page = $(this).attr('href').split('page=')[1];

        // Fai la richiesta Ajax per ottenere i successivi 5 thread
        $.ajax({
            url: '{{ route("threads.index") }}?page=' + page,
            method: 'GET',
            success: function (data) {
                // Rimuovi i thread attuali dalla vista
                $('.row[data-thread-id]').remove();

                // Aggiungi i nuovi thread dalla risposta della richiesta Ajax
                $('.col.overflow-auto').append(data);

                // Puoi anche aggiungere animazioni o altri effetti se lo desideri
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});
