$(document).ready(function () {
    const tagsInput = $("#tags");
    const tagsContainer = $("#tags-container");
    const valueContainer = $("#form-container");
    const errorMessage = [
        '<div class="alert alert-danger alert-dismissible fade show" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle flex-shrink-0 me-2" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" /><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" /></svg><strong>Errore:</strong> Hai raggiunto il numero massimo di tags<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi"></button></div>',
    ];
    const tagsRecived = $("#association_tags").val()
        ? JSON.parse($("#association_tags").val())
        : null;

    // Limite massimo di tag
    const maxTags = 10;

    // Mappa per tenere traccia degli input associati a ciascun tag
    const tagInputMap = new Map();

    if (tagsRecived) {
        tagsRecived.forEach((tag) => {
            addTagToContainer(
                tagsInput,
                tagsContainer,
                valueContainer,
                tag.name
            );
        });
    }

    tagsInput.on("keydown", function (event) {
        if (
            event.code === "Space" ||
            event.code === "Spacebar" ||
            event.keyCode === 32
        ) {
            const inputValue = tagsInput.val().trim();
            if (inputValue !== "") {
                // Verifica il limite massimo di tag
                if (tagsContainer.find(".tag-circle").length < maxTags) {
                    addTagToContainer(
                        tagsInput,
                        tagsContainer,
                        valueContainer,
                        inputValue
                    );
                } else {
                    // Mostra un messaggio o esegui azioni appropriate quando il limite è raggiunto
                    $("#notify").append(errorMessage);
                }
            }
            tagsInput.val("");
            event.preventDefault();
        }
    });

    function addTagToContainer(input, container, valueContainer, tagText) {
        const tagCircle = createTagCircle(tagText);
        container.append(tagCircle);

        // Creazione dell'input nascosto
        const realData = $("<input>")
            .attr({
                type: "hidden",
                name: "tags[]",
                value: tagText,
            })
            .appendTo(valueContainer);

        // Associazione dell'input al tag
        tagInputMap.set(tagCircle, realData);
    }

    function createTagCircle(tagText) {
        const tagCircle = $("<span>", {
            class: "tag-circle",
            text: tagText,
        });

        const removeIcon = $("<i>", {
            class: "bi bi-x-lg",
            click: function () {
                const realData = tagInputMap.get(tagCircle);
                if (realData) {
                    realData.remove(); // Rimuovi l'input associato
                }
                tagCircle.remove();
            },
            mouseenter: function () {
                $(this).css("cursor", "pointer");
            },
            mouseleave: function () {
                $(this).css("cursor", "default");
            },
        });

        tagCircle.append(removeIcon);
        return tagCircle;
    }

    $("#edit-association").on("shown.bs.modal", function (evt) {});
});
