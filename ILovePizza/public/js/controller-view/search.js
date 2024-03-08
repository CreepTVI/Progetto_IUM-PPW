$(document).ready(function () {
    var searchResults = $("#search-results");
    var container = $("#value-container");

    $("#search-input").on("input", function () {
        var search = $(this).val();

        if (search.length >= 2) {
            $.ajax({
                url: "/search",
                method: "GET",
                data: { search: search },
                success: function (response) {
                    searchResults.empty();

                    response[0].users.forEach(function (user) {
                        var url = window.location.origin + "/user/get/:id";
                        url = url.replace(":id", user.id);

                        searchResults.append(
                            '<a href="' +
                                url +
                                '"><li>' +
                                user.email +
                                "<small> - #Utente</small></li></a>"
                        );
                    });

                    response[0].associations.forEach(function (association) {
                        var url =
                            window.location.origin + "/association/get/:id";
                        url = url.replace(":id", association.id);
                        searchResults.append(
                            '<a href="' +
                                url +
                                '"><li>' +
                                association.name +
                                "<small> - #Associazione</small></li></a>"
                        );
                    });

                    response[0].threads.forEach(function (thread) {
                        var url = window.location.origin + "/post/show/:id";
                        url = url.replace(":id", thread.id);
                        searchResults.append(
                            '<a href="' +
                                url +
                                '"><li>' +
                                thread.title +
                                "<small> - #Thread</small></li></a>"
                        );
                    });

                    // Mostra o nascondi il pannello di ricerca in base ai risultati
                    if (response.length > 0) {
                        container.show();
                    } else {
                        container.hide();
                    }
                },
                error: function (error) {
                    console.error(error);
                },
            });
        } else {
            // Nascondi sia i risultati che il pannello di ricerca
            container.hide();
        }
    });
});
