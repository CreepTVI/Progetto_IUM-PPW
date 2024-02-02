@extends('layouts.layout')
@section('content')
    <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page"><a href="index.html">Home</a></li>
        </ol>
    </nav>

    <h3>Bentornato {{ Auth::guard('representative')->user()->representative }} </h3>
    <div class="row">

        <!-- Sezione dei post -->
        <div class="col-8">
            <label for="Thred-User">Tuoi Thread</label>
            <!-- Elenco post-->
            <div class="col overflow-auto corp">
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

            <!-- nav pagination -->
            <nav class="pagination justify-content-end" aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    @for ($i = 1; $i <= 3; $i++)
                        <li class="page-item"><a class="page-link" href="#">{{ $i }}</a></li>
                    @endfor

                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <!--Sezione delle info-->
        <div class="col-4 h-75 ">
            <div class="accordion w-100" id="accordionExample">
                <!-- Thread recenti -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Threa recenti
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">


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
                </div>

                <!-- Utenti associazione -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Membri associazione
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
