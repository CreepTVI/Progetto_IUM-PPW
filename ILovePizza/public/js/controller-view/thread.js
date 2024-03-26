$(document).ready(function () {
    const container = $("#like-container");
    var routeThreadUpdateLike = $("#routeThreadUpdateLike");
    

    var currentUrl = window.location.href;
    var urlParts = currentUrl.split("/");
    var id = urlParts[urlParts.length - 1];
    loadLikes(id);

    $(document).on("click", "#like-btn", function (e) {
        e.preventDefault();

        $.ajax({
            url:routeThreadUpdateLike.val() + id,
            method: "POST",
            dataType: "json",
            data: $(this).closest("form").serialize(),

            success: function (response) {
                loadLikes(id);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Errore durante la richiesta AJAX:", errorThrown);
            },
        });
    });
});


function loadLikes(id) {
    var routeThreadGetLikes = $("#routeThreadGetLikes");
    $.ajax({
        url: routeThreadGetLikes.val() + id,
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#like-container").html(response.data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Errore durante la richiesta AJAX:", errorThrown);
        },
    });
}
