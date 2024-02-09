// public/js/tags.js

$(document).ready(function () {
    const tagsInput = $("#tags");
    const tagsContainer = $("#tags-container");

    tagsInput.on("keyup", function (event) {
        if (event.code === "Space" || event.code === "Spacebar" || event.keyCode === 32) {
            addTagToContainer(tagsInput, tagsContainer);
        }
    });

    tagsInput.on("input", function () {
        // Chiamato quando si modifica il contenuto dell'input
        removeTagFromContainer(tagsInput, tagsContainer);
    });

    function addTagToContainer(input, container) {
        const inputValue = input.val().trim();
        if (inputValue !== "") {
            const tagCircle = createTagCircle(inputValue);
            container.append(tagCircle);
            input.val("");
            updateTagsInputValue(container, input);
        }
    }

    function removeTagFromContainer(input, container) {
        const inputTags = input.val().split(" ").filter(tag => tag !== "");
        const containerTags = container.find(".tag-circle");

        // Trova i tag da rimuovere
        const tagsToRemove = containerTags.filter(function () {
            const tagText = $(this).text().trim();
            return !inputTags.includes(tagText);
        });

        // Rimuovi i tag visivi
        tagsToRemove.remove();
    }

    function createTagCircle(tagText) {
        const tagCircle = $("<span>", {
            class: "tag-circle",
            text: tagText
        });
        return tagCircle;
    }

    function updateTagsInputValue(container, input) {
        const tags = container.find(".tag-circle").map(function () {
            return $(this).text();
        }).get().join(" ");
        input.val(tags);
    }
});
