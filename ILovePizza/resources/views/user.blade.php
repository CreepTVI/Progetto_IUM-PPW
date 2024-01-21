@extends('layouts.layout')
@section('content')
    {{-- Contenuti pagina utente:
        -   Distingurere fra rappresentante associazione e utente classico
        -   Inserire immagine scelta dall'utente
        -   Tasto di modifica del profilo
        -   Visualizzazione del:
                -   email
                -   password
                -   img
        --}}

    <link rel="stylesheet" href="/css/user.css">
    <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
        </ol>
    </nav>

    <!--Informazioni utete-->
    <div class="blog-post">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                        class="img-fluid rounded-start" alt="...">
                </div>

                <div class="col-md-8">

                    <div class="newOrExplore-container-copy">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h6 class="sm-0">Username</h6>
                                </div>
                                <div class="col-sm-8 text-secondary">
                                    Kenneth Valdez
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-4">
                                    <h6 class="sm-0">Email</h6>
                                </div>
                                <div class="col-sm-8 text-secondary">
                                    fip@jukmuh.al
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-4">
                                    <h6 class="mb-0">Associazione</h6>
                                </div>
                                <div class="col-sm-8 text-secondary">
                                    Bay Area, San Francisco, CA
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12">
                                    <!-- Trigger modal -->
                                    <button type="button" class="btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#editInfoUser">
                                        Modifca
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal per la modifica -->
    <div class="modal fade" id="editInfoUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modifica</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="editUsername" class="form-label">Username</label>
                            <input type="text" class="form-control" id="editUsername" aria-describedby="text">
                        </div>
                        <div class="mb-3">
                            <label for="editEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="editEmail" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="editPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="editPassword">
                        </div>
                        <div class="mb-3">
                            <label for="editConfPassword" class="form-label">Conferma password</label>
                            <input type="password" class="form-control" id="editConfPassword">
                        </div>



                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Chiudi</button>
                            <button type="submit" class="btn btn-outline-success">Salva</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endsection
