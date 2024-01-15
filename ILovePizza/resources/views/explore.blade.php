@extends('layouts.layout')
@section('content')
    {{-- Visualizzazione:
    -   filtri di ricerca dei thread
        -   popolari
        -   recenti
        -   assoicazione
        -   tag
    -   elenco dei thread 
    --}}
    <div class="container">
        <p>Percorso dinamico per identificare la navigazione nel sito esempi: Home > community forum
        </p>

        <h6>Titolo sezione</h6>

        {{-- Filtri --}}
        <!-- action ={ { route('threads.index') } } -->

        <form method="GET" action="">
            <label for="titolo">Filtro per Titolo:</label>
            <!-- action { { request('titolo') } -->
            <input type="text" name="titolo" value="">
            <button type="submit">Filtra</button>
        </form>

        {{-- Thread --}}
        <div class="col overflow-auto" style="height: 30%; padding-left:5%; padding-rigth:0; ">

            <div class="row">
                <!--Sezione dei post-->
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
            </div>
            <div class="row">
                <!--Sezione dei post-->
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
            </div>
            <div class="row">
                <!--Sezione dei post-->
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
            </div>
            <div class="row">
                <!--Sezione dei post-->
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
            </div>
            <div class="row">
                <!--Sezione dei post-->
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
@endsection
