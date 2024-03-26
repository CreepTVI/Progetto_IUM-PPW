document.addEventListener("DOMContentLoaded", function () {
    function handleFileSelect(event) {
        const fileInput = event.target;
        const dropContainer = document.getElementById("dropcontainer");
        const backgroundImage = document.getElementById("background-image");
        const reader = new FileReader();

        reader.onload = function (e) {
            // Aggiungi lo sfondo sfocato all'elemento immagine
            backgroundImage.src = e.target.result;
            backgroundImage.style.filter = "blur(5px)"; // Puoi regolare il valore di sfocatura qui
        };

        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    const dropContainer = document.getElementById("dropcontainer");

    dropContainer.addEventListener(
        "dragover",
        (e) => {
            e.preventDefault();
        },
        false
    );

    dropContainer.addEventListener("dragenter", () => {
        dropContainer.classList.add("drag-active");
    });

    dropContainer.addEventListener("dragleave", () => {
        dropContainer.classList.remove("drag-active");
    });

    dropContainer.addEventListener("drop", (e) => {
        e.preventDefault();
        dropContainer.classList.remove("drag-active");
        document.getElementById("background-image").files =
            e.dataTransfer.files;
        document.getElementById("images").files = e.dataTransfer.files;
        handleFileSelect(e);
    });

    const fileInput = document.getElementById("images");
    fileInput.addEventListener("change", handleFileSelect);
});
