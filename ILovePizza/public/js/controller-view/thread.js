$(document).ready(function () {
    const container = $("#like-container");

    var currentUrl = window.location.href;
    var urlParts = currentUrl.split('/');
    var id = urlParts[urlParts.length - 1];
    loadLikes(id);
    

    $(document).on('click', '#like-btn', function (e) {
        console.log("ok");
        e.preventDefault();

        $.ajax({
            url: '/post/update/likes/' + id,
            method: 'POST',
            dataType: 'json',
            data: $(this).closest('form').serialize(),

            success: function (response) {
                loadLikes(id);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Errore durante la richiesta AJAX:', errorThrown);
            }
        });

    });

});

function loadLikes(id) {
    $.ajax({
        url: '/post/get/likes/' + id,
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            $('#like-container').html(response.data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Errore durante la richiesta AJAX:', errorThrown);
        }
    });
}
