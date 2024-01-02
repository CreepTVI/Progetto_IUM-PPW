@extends('layouts.layout')
@section('content')
    <!-- Sezine dedicata alla creazione del post -->
    <div class="container">
        <p>Percorso dinamico per identificare la navigazione nel sito esempi: Home > community forum
        </p>
        <h6>Titolo sezione</h6>
        <div class="new-blog-post">
            <form action="" class="container-new-post">
                <div class="container-new-post">
                    <div class="row">
                        <div class="col-6">
                            <input type="text" id="new-post-title" placeholder="Titolo del post..."><br>


                            <textarea class="form-control text-post" style="" name="" id="new-post-textarea"
                                placeholder="Condividi ciò che pensi!" autocomplete="off" autofocus></textarea>
                        </div>

                        <div class="col-6">
                            <div id="img-to-upload"></div>

                            <input type="submit" class="btn-primary-new-post" href='#' target="_blank"
                                value="Crea">

                        </div>
                    </div>

                </div>
            </form>

        </div>
    </div>
@endsection
