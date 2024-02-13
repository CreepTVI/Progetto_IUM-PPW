@extends('layouts.layout')
@section('content')
    @if ($association)
        <script src="/js/tags.js"></script>
        <link rel="stylesheet" href="/css/tags.css">

        <input hidden value="{{ $tags }}" id="association_tags">

        <div class="blog-post">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-sm-4">
                        <img src="{{ asset(Storage::url($association_photo)) }}" class="img-fluid rounded-start"
                            alt="Immagine del associazione">
                    </div>

                    <div class="col-md-8">
                        <div class="row">
                            <div class="newOrExplore-container-copy m-3">
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="sm-0">{{ __('Nome associazione') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            {{ old('name', $association->name) }}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="sm-0">{{ __('Rappresentante') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            {{ old('email', $representative->email) }}
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="mb-0">{{ __('Descrizione') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">

                                            {{ old('description', $association->description) }}

                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="mb-0">{{ __('Tags') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            @foreach ($tags as $tag)
                                                <span class="tag-circle">{{ $tag->name }}</span>
                                            @endforeach
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                        </div>

                        <div class="row mr-3 mt-5 pb-3">
                            <div class="position-relative">

                                <div class="btn-toolbar position-absolute bottom-0 end-0" role="toolbar"
                                    aria-label="Toolbar with button groups">

                                    <div class="btn-group me-2" role="group" aria-label="Third group">
                                        @include('association.partials.delete-association-form')
                                    </div>
                                    <div class="btn-group me-2" role="group" aria-label="First group">
                                        @include('association.partials.update-association-information-form')
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @else
        <script src="/js/add-img.js"></script>
        <link rel="stylesheet" href="/css/tags.css">

        <form method="POST" action="{{ route('association.create') }}" enctype="multipart/form-data">
            @csrf
            <div class="blog-post container p-3 m-3">
                <div class="row">
                    <!-- Immagine a sinistra -->
                    <div class="col-md-4" style="max-height: 100vh; position: relative;">
                        <label for="photo" class="drop-container" id="dropcontainer"
                            style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <span class="drop-title load-up">Trascina qui l'immagine</span>
                            <p class="load-up">oppure</p>
                            <input name="photo" class="load-up" type="file" id="images" accept="image/*">
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
