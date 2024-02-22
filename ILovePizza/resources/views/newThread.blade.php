@extends('layouts.layout')
@section('content')
    <script src="/js/add-img.js"></script>

    <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Nuovo Post</li>
        </ol>
    </nav>
    <div class="col-12 mt-5">

        <!-- Sezione per la creazione del post -->
        <form class="blog-post p-3 m-3">
            <div class="row">
                <!-- Carica eventuali immagini -->
                <div class="col-md-4" style="max-height: 100vh; position: relative;">
                    <label for="images" class="drop-container" id="dropcontainer">
                        <span class="drop-title load-up">Trascina
                            qui l'immagine</span>
                        <p class="load-up">oppure</p>
                        <input name="images" class="load-up" type="file" id="images" accept="image/*">
                        <img id="background-image" class="background-image" alt="Background Image"
                            src="/img/default-image.jpg.webp">
                    </label>
                </div>

                <!-- Contenuto del post -->
                <div class="col-md-8">
                    <div class="rows">
                        <div class="card-body">
                            <div class="newOrExplore-container-copy">
                                <div class="row g-1 mb-3">
                                    <div class="col-2 justify-content-center ">
                                        <div class="img-pod-card">
                                            <img class="user-icon"
                                                src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                                alt="random image">
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <p class="mt-3 ml-3">Username</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <h6>12 January 2019 <span class="badge badge-secondary">New</span></h6>
                                    <textarea minlength="1" maxlength="500" class="form-control text-post" id="new-post-textarea"
                                        placeholder="Condividi ciò che pensi!" autocomplete="off"></textarea><br>
                                    <button type="submit" class="btn-primary-new-post mt-3 ">Crea</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
