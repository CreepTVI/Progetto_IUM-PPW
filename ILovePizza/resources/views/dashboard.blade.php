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
    <div class="row">
        <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Esplora</li>
            </ol>
        </nav>
    </div>
    {{-- Filtri --}}
    <!-- action ={ { route('threads.index') } } -->
    <div class="row">


        <form method="GET" action="">
            <label for="titolo">Filtro per Titolo:</label>
            <!-- action { { request('titolo') } -->
            <input type="text" name="titolo" value="">
            <button type="submit">Filtra</button>
        </form>
    </div>
    {{-- Thread --}}
    <div class="row overflow-auto m-3 corp">
        <div class="row">
            <div class="col">
                <div class="blog-post">
                    <div class="container-copy">
                        <div class="row g-1 mb-3">
                            <div class="col-2 pr-0">
                                <div class="img-pod-card">
                                    <img class="user-icon"
                                        src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                        alt="random image">
                                </div>
                            </div>
                            <div class="col-10 p-0">
                                <p class="mt-3">Username</p>
                            </div>
                        </div>
                        <div class="row">
                            <h6>12 January 2019 <span class="badge badge-secondary">New</span></h6>
                            <h3>CSS Positioning</h3>
                            <p>perspiciatis
                                explicabo
                                nemo, nam minima iusto ipsum ipsa magni. Tempore laborum error eius enim veniam
                                incidunt hic amet impedit ratione dignissimos. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Illo perspiciatis explicabo nemo, nam minima iusto
                                ipsum ipsa magni. Tempore laborum error eius enim veniam t</p>
                            <a class="btn-primary" href='#' target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="blog-post">
                    <div class="container-copy">
                        <div class="row g-1 mb-3">
                            <div class="col-2 pr-0">
                                <div class="img-pod-card">
                                    <img class="user-icon"
                                        src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                        alt="random image">
                                </div>
                            </div>
                            <div class="col-10 p-0">
                                <p class="mt-3">Username</p>
                            </div>
                        </div>
                        <div class="row">
                            <h6>12 January 2019 <span class="badge badge-secondary">New</span></h6>
                            <h3>CSS Positioning</h3>
                            <p>perspiciatis
                                explicabo
                                nemo, nam minima iusto ipsum ipsa magni. Tempore laborum error eius enim veniam
                                incidunt hic amet impedit ratione dignissimos. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Illo perspiciatis explicabo nemo, nam minima iusto
                                ipsum ipsa magni. Tempore laborum error eius enim veniam t</p>
                            <a class="btn-primary" href='#' target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="blog-post">
                    <div class="container-copy">
                        <div class="row g-1 mb-3">
                            <div class="col-2 pr-0">
                                <div class="img-pod-card">
                                    <img class="user-icon"
                                        src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                        alt="random image">
                                </div>
                            </div>
                            <div class="col-10 p-0">
                                <p class="mt-3">Username</p>
                            </div>
                        </div>
                        <div class="row">
                            <h6>12 January 2019 <span class="badge badge-secondary">New</span></h6>
                            <h3>CSS Positioning</h3>
                            <p>perspiciatis
                                explicabo
                                nemo, nam minima iusto ipsum ipsa magni. Tempore laborum error eius enim veniam
                                incidunt hic amet impedit ratione dignissimos. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Illo perspiciatis explicabo nemo, nam minima iusto
                                ipsum ipsa magni. Tempore laborum error eius enim veniam t</p>
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
@endsection
