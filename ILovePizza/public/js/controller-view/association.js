$(document).ready(function () {
    // Ascolta l'evento di clic sul bottone
    $("#open-modal-list").on("click", function () {
        const container = $("#show");

        $.ajax({
            url: "/user/list",
            method: "GET",
            success: function (response) {
                response.forEach((user) => {
                    const listItem = $("<li>").addClass("list-group-item");
                    // Creazione dell'elemento input con la checkbox e aggiunta a listItem
                    const checkbox = $("<input>")
                        .attr({
                            type: "checkbox",
                            name: "selected_users[]",
                            value: user.id,
                            id: "user_checkbox_" + user.id,
                        })
                        .addClass("form-check-input form-check-lg");
                    listItem.append(checkbox);
                    // Creazione dell'elemento label con testo descrittivo e associato all'input
                    const label = $("<label>")
                        .text(user.email)
                        .attr("for", "user_checkbox_" + user.id);
                    listItem.append(label);
                    // Aggiungi l'elemento della lista al container
                    container.append(listItem);
                });
            },
            error: function (error) {
                console.error(error);
            },
        });
    });

    $("#list-users").on("hidden.bs.modal", function () {
        $(".list-group-item").remove();
    });

    $("#search-user").on("keyup", function () {
        var filter = $(this).val().toUpperCase();
        var ul = $("#show");
        var li = ul.find("li");

        li.each(function () {
            var txtValue = $(this).text();

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
