@extends('layouts.layout')
@section('content')
    <script src="/js/add-img.js"></script>
    <script src="/js/tags.js"></script>
    <link rel="stylesheet" href="/css/tags.css">

    <div class="col-12 mt-5">

        <!-- Sezione per la creazione del post -->
        <form class="blog-post p-3 m-3" action="{{ route('thread.new.create') }}" method="POST" id="form-container"
            enctype="multipart/form-data">
            @csrf
            <div class="row">
                <!-- Carica eventuali immagini -->
                <div class="col-md-4" style="max-height: 100vh; position: relative;">
                    <label for="images" class="drop-container" id="dropcontainer">
                        <span class="drop-title load-up">Trascina
                            qui l'immagine</span>
                        <p class="load-up">oppure</p>
                        <input name="photo" class="load-up" type="file" id="images" accept="image/*">
                        <img id="background-image" class="background-image" alt="Background Image"
                            src="/img/default-image.jpg.webp">
                    </label>
                    <div id="tags-container"></div>
                </div>

                <!-- Contenuto del post -->
                <div class="col-md-8">
                    <div class="rows">
                        <div class="card-body pt-0 pb-0">
                            <div class="newOrExplore-container-copy m-0">
                                <div class="row mt-3 mb-3">
                                    <div class="col d-flex ">
                                        <div class="img-pod-card">
                                            <img class="user-icon" src="{{ asset(Storage::url($user->photo)) }}"
                                                alt="Immagine utente">
                                        </div>
                                        <p class="m-3">{{ $user->name }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <h6>{{ $date }}<span class="badge badge-secondary">New</span></h6>

                                    <div class="mb-4">
                                        <input type="text" name="title" class="form-control" placeholder="Titolo">
                                    </div>
                                    <div class="mb-4">

                                        <textarea name="text" minlength="1" maxlength="500" class="form-control text-post" id="new-post-textarea"
                                            placeholder="Condividi ciò che pensi!" autocomplete="off"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control input-form" id="tags"
                                            aria-describedby="tagsHelp" autofocus
                                            placeholder="Tag per i tipi della tua associazione" list="tag-list">
                                        @if ($suggested)
                                            <datalist id="tag-list">
                                                @foreach ($suggested as $tag)
                                                    <option value="{{ $tag->name }}">
                                                @endforeach
                                            </datalist>
                                        @endif

                                        <div id="tagsHelp" class="form-text">Inserisci i tipi di pizza trattati nel post
                                        </div>
                                    </div>
                                    <button type="submit" class="btn-primary-new-post mt-3">Crea</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
