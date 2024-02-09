@extends('layouts.layout')
@section('content')
    @if ($association)
    @else
        <script src="/js/add-img.js"></script>
        <script src="/js/tags.js"></script>
        <link rel="stylesheet" href="/css/tags.css">

        <form method="POST" action="{{ route('association.create') }}" enctype="multipart/form-data">
            @csrf
            <div class="blog-post container p-3 m-3">
                <div class="row">
                    <!-- Immagine a sinistra -->
                    <div class="col-md-4" style="max-height: 100vh; position: relative;">
                        <label for="images" class="drop-container" id="dropcontainer"
                            style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <span class="drop-title load-up">Trascina qui l'immagine</span>
                            <p class="load-up">oppure</p>
                            <input name="images" class="load-up" type="file" id="images" accept="image/*">
                            <img id="background-image" class="background-image" alt="Background Image"
                                style="width: 100%; height: 100%; object-fit: cover; filter: blur(5px)"
                                src="/img/default-image.jpg.webp">
                        </label>
                    </div>

                    <!-- Form a destra -->
                    <div class="col-md-8">
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
                            <input type="text" name="tags_pizza" class="form-control" id="tags"
                                aria-describedby="tagsHelp" autocomplete="additional-tags" autofocus
                                placeholder="Tag per i tipi della tua associazione" list="tag-list">
                            <div id="tags-container"></div>
                            <div id="tagsHelp" class="form-text">Inserisci i tipi di pizza della tua associazione</div>
                            <datalist id="tag-list">
                                @foreach ($tags as $tag)
                                    <option value="{{ $tag }}">
                                @endforeach
                            </datalist>
                        </div>

                        <div class="mb-4">
                            <textarea class="form-control" name="description" id="description" rows="3" placeholder="Descrizione"></textarea>
                            <div id="descriptionHelp" class="form-text">Inserisci una descrizione per la tua associazione
                            </div>
                        </div>

                        <div class="position-relative">
                            <div class="btn-toolbar position-absolute bottom-0 end-0" role="toolbar"
                                aria-label="Toolbar with button groups">
                                <button type="submit" class="btn btn-outline-success">Crea</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    @endif
@endsection
