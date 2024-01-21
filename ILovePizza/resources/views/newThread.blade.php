@extends('layouts.layout')
@section('content')
    <!-- Sezione dedicata alla creazione del post -->

    <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Nuovo Post</li>
        </ol>
    </nav>
    <div class="col-12">
        <form class="blog-post">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <label for="images" class="drop-container" id="dropcontainer">
                            <span class="drop-title load-up">Trascina qui l'immagine</span>
                            <p class="load-up">oppure</p>
                            <input class="load-up" type="file" id="images" accept="image/*" required
                                onchange="handleFileSelect(event)">

                            <img id="background-image" class="background-image" src="/img/default-image.jpg"
                                alt="Background Image" style="position: absolute; filter: blur(5px)">
                        </label>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="newOrExplore-container-copy">
                                <div class="img-pod">
                                    <img class="user-icon"
                                        src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                        alt="random image">
                                </div>
                                <h6>12 January 2019 <span class="badge badge-secondary">New</span></h6>
                                <input id="new-post-title" type="text" placeholder="Titolo del post..." autofocus>
                                <textarea minlength="1" maxlength="500" class="form-control text-post" id="new-post-textarea"
                                    placeholder="Condividi ciò che pensi!" autocomplete="off"></textarea><br>
                                <input type="submit" class="btn-primary-new-post" href='#' target="_blank"
                                    value="Crea">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <script>
        function handleFileSelect(event) {
            const fileInput = event.target;
            const dropContainer = document.getElementById("dropcontainer");
            const backgroundImage = document.getElementById("background-image");
            const reader = new FileReader();

            reader.onload = function(e) {
                // Aggiungi lo sfondo sfocato all'elemento immagine
                backgroundImage.src = e.target.result;
                backgroundImage.style.filter = 'blur(5px)'; // Puoi regolare il valore di sfocatura qui
            };

            if (fileInput && fileInput.files && fileInput.files.length > 0) {
                reader.readAsDataURL(fileInput.files[0]);
            }
        }

        const dropContainer = document.getElementById("dropcontainer");

        dropContainer.addEventListener("dragover", (e) => {
            e.preventDefault();
        }, false);

        dropContainer.addEventListener("dragenter", () => {
            dropContainer.classList.add("drag-active");
        });

        dropContainer.addEventListener("dragleave", () => {
            dropContainer.classList.remove("drag-active");
        });

        dropContainer.addEventListener("drop", (e) => {
            e.preventDefault();
            dropContainer.classList.remove("drag-active");
            document.getElementById("background-image").files = e.dataTransfer.files;
            document.getElementById("images").files = e.dataTransfer.files;
            handleFileSelect(e);
        });
    </script>
@endsection
