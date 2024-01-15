@extends('layouts.layout')
@section('content')
    <div class="container-fluid" style="width:70%; margin:0; ">
        <p>Percorso dinamico per identificare la navigazione nel sito esempi: Home > community forum
        </p>

        <h6>Titolo sezione</h6>

        <div class="col overflow-auto " style="height: 55%; padding-left:5%; padding-rigth:0;">
            <!--Sezione dei post-->
            <div class="col-12">

                <div class="row">
                    <div class="row">
                        <div class="col">
                            <div class="blog-post">
                                <div class="container-copy">
                                    <div class="img-pod">
                                        <img class="user-icon"
                                            src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                            alt="random image">
                                    </div>
                                    <h6>12 January 2019 <span class="badge badge-secondary">New</span></h6>
                                    <h3>CSS Positioning</h3>
                                    <p>The position property specifies the type of positioning method used
                                        for an element (static, relative, absolute, fixed, or sticky).</p>
                                    <a class="btn-primary" href='#' target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="blog-post">
                                <div class="container-copy">
                                    <div class="img-pod">
                                        <img class="user-icon"
                                            src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                            alt="random image">
                                    </div>
                                    <h6>12 January 2019</h6>
                                    <h3>CSS Positioning</h3>
                                    <p>The position property specifies the type of positioning method used
                                        for an element (static, relative, absolute, fixed, or sticky).</p>
                                    <a class="btn-primary" href='#' target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="blog-post">
                                <div class="container-copy">
                                    <div class="img-pod">
                                        <img class="user-icon"
                                            src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                            alt="random image">
                                    </div>
                                    <h6>12 January 2019</h6>
                                    <h3>CSS Positioning</h3>
                                    <p>The position property specifies the type of positioning method used
                                        for an element (static, relative, absolute, fixed, or sticky).</p>
                                    <a class="btn-primary" href='#' target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{-- Cambio di pagina dei thread --}}
        <div class="pagination justify-content-end ">
            @for ($i = 1; $i <= 10; $i++)
                <a href="#" class="page-link">{{ $i }}</a>
            @endfor
        </div>
        <div class="pagination justify-content-end"></div>
    </div>
    <!--Sezione delle info-->
    <div class="container-fluid" style="width: 30%; ">
        <!-- Threa più recenti-->
        <div class="row-lg-3 position-relative top-50 start-50 translate-middle side-info-section">
            <h5 style="padding: 15px">Threa recenti</h5>
            <div class="list-group">

                <a href="#" class="list-group-item list-group-item-action">
                    <div class="justify-content-between">
                        <h6>Titolo</h6>
                        <small>3 days ago</small>
                    </div>
                    <small>Autore: Nome</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="justify-content-between">
                        <h6>Titolo</h6>
                        <small>3 days ago</small>
                    </div>
                    <small>Autore: Nome</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="justify-content-between">
                        <h6>Titolo</h6>
                        <small>3 days ago</small>
                    </div>
                    <small>Autore: Nome</small>
                </a>
            </div>
        </div>

        <div class="row-lg-3 position-relative top-50 start-50 translate-middle side-info-section" id="sezione-mebri">
            <hr class="rounded">
            <h5 style="padding: 15px">Membri dell'associazione: (Nome)</h5>
            <div class="list-user" style="">

                <ul class="list-group">

                    <a href="">
                        <li class="list-group-item list-group-item-action user-item text-center">
                            <div class="media">
                                <img class="align-self-start mr-3 img-user user-icon"
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png">
                                <div class="media-body">
                                    <h6 class="mt-0">Mark martin lowkeymth</h6><br>
                                    <small>Role</small>
                                </div>
                            </div>
                        </li>
                    </a>

                    <a href="">
                        <li class="list-group-item list-group-item-action user-item text-center">
                            <div class="media">
                                <img class="align-self-start mr-3 img-user user-icon"
                                    src="https://bootdey.com/img/Content/avatar/avatar6.png">
                                <div class="media-body">
                                    <h6 class="mt-0">John Doe</h6><br>
                                    <small>Role</small>
                                </div>
                            </div>
                        </li>
                    </a>

                    <a href="">
                        <li class="list-group-item list-group-item-action user-item text-center">
                            <div class="media">
                                <img class="align-self-start mr-3 img-user user-icon"
                                    src="https://bootdey.com/img/Content/avatar/avatar1.png">
                                <div class="media-body">
                                    <h6 class="mt-0">Mark martin lowkeymth</h6><br>
                                    <small>Role</small>
                                </div>
                            </div>
                        </li>
                    </a>

                </ul>
            </div>
        </div>
    @endsection
