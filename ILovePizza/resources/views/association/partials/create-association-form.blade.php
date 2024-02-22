<script src="/js/add-img.js"></script>
<link rel="stylesheet" href="/css/tags.css">

<div class="blog-post p-3 m-3">
    <form method="POST" action="{{ route('association.create') }}" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <!-- Immagine a sinistra -->
            <div class="col-md-4" style="max-height: 100vh; position: relative;">
                <label for="photo" class="drop-container" id="dropcontainer">
                    <span class="drop-title load-up">Trascina
                        qui l'immagine</span>
                    <p class="load-up">oppure</p>
                    <input name="photo" class="load-up" type="file" id="images" accept="image/*">
                    <img id="background-image" class="background-image" alt="Background Image"
                        src="/img/default-image.jpg.webp">
                </label>
            </div>

            <!-- Form a destra -->
            <div class="col-md-8">
                <div class="row">
                    <label for="association" class="p-3 ml-3 mr-3">
                        <h1>Crea la tua associazione!</h1>
                    </label>

                    <div class="mb-4">
                        <input type="name" name="name" class="form-control" id="name"
                            aria-describedby="nameHelp" autocomplete="additional-name" autofocus
                            placeholder="Nome associazione">
                        <div id="nameHelp" class="form-text">Inserisci il nome della tua associazione</div>
                    </div>

                    <div class="mb-4">
                        <textarea class="form-control" name="description" id="description" rows="3" placeholder="Descrizione"></textarea>
                        <div id="descriptionHelp" class="form-text">Inserisci una descrizione per la tua associazione
                        </div>
                    </div>
                </div>
                <div class="row m-3">
                    <div class="m-3 position-relative">
                        <div class="btn-toolbar position-absolute bottom-0 end-0" role="toolbar"
                            aria-label="Toolbar with button groups">
                            <button type="submit" class="btn-primary-new-post">Crea</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
