$(document).ready(function () {
    var currentUrl = window.location.href;
    var urlParts = currentUrl.split("/");
    var id = urlParts[urlParts.length - 1];
    let page = 1;
    let totalPage;
    var routeThreadGetComments = $("#routeThreadGetComments");
    var routeThreadAddComment = $("#routeAddComment");
 
    // Funzione che restituisce una promise
    function loadCommentsAsync(id, page) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url:routeThreadGetComments.val() + id + "?page=" + page,
                method: "GET",
                dataType: "json",
                success: function (response) {
                    totalPage = response.totalPage;
                    $("#comment-container").append(response.data);
                    resolve(); // Risolve la promise quando la chiamata AJAX è completata
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(
                        "Errore durante la richiesta AJAX:",
                        errorThrown
                    );
                    reject(); // Rigetta la promise in caso di errore
                },
            });
        });
    }

    // Carica i commenti iniziali
    loadCommentsAsync(id, page).then(function () {
        if (page >= totalPage) {
            $("#load-more").hide();
        }

        $(document).on("submit", "#add-comment-form", function (e) {
            e.preventDefault();
            $.ajax({
                url:routeThreadAddComment.val() + id,
                method: "POST",
                dataType: "json",
                data: $(this).closest("form").serialize(),

                success: function (response) {
                    $("#comment-container").empty();

                    $("#comment-input").val("");

                    loadCommentsAsync(id, 1);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(
                        "Errore durante la richiesta AJAX:",
                        errorThrown
                    );
                },
            });
        });

        $(document).on("click", "#load-more", function (e) {
            e.preventDefault();
            page += 1;
            // Quando clicchi "Carica altro", carica la pagina successiva dei commenti
            loadCommentsAsync(id, page).then(function () {
                if (page == totalPage) $("#load-more").hide();
            });
        });
    });


});
