$(document).ready(function () {
    var searchResults = $("#search-results");
    var container = $("#value-container");
    var routeSearch = $("#routeSearch");
    var routeUserIndex = $("#routeUserIndex");
    var routeAssociationIndex = $("#routeAssociationIndex");
    var routeThreadIndex = $("#routeThreadIndex");

    $("#search-input").on("input", function () {
        var search = $(this).val();
        
        if (search.length >= 2) {
            $.ajax({
                url:routeSearch.val(),
                method: "GET",
                data: { search: search },
                success: function (response) {
                    searchResults.empty();

                    response[0].users.forEach(function (user) {
                        
                        var url = routeUserIndex.val() + user.id;

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
                        routeAssociationIndex.val() + association.id;                        
                        searchResults.append(
                            '<a href="' +
                                url +
                                '"><li>' +
                                association.name +
                                "<small> - #Associazione</small></li></a>"
                        );
                    });

                    response[0].threads.forEach(function (thread) {
                        var url = routeThreadIndex.val() + thread.id;
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
