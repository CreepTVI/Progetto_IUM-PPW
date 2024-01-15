@extends('layouts.layout')
@section('content')
    <div class="container" style="padding-left:5%; padding-rigth:0;">
        <!--Sezione dei post-->
        <div class="row-12">

            <div class="blog-post">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">

                            <div class="newOrExplore-container-copy"">
                                <div class="img-pod">
                                    <img class="user-icon"
                                        src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                                        alt="random image">
                                </div>
                                <h6>12 January 2019 <span class="badge badge-secondary">New</span></h6>
                                <h3>CSS Positioning</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perspiciatis explicabo
                                    nemo, nam minima iusto ipsum ipsa magni. Tempore laborum error eius enim veniam
                                    incidunt hic amet impedit ratione dignissimos. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Illo perspiciatis explicabo nemo, nam minima iusto
                                    ipsum ipsa magni. Tempore laborum error eius enim veniam t</p>
                                <button type="button" class="btn btn-secondary border-0 bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="balck"
                                        class="bi bi-heart" viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"
                                        class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg><small>200</small>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{-- Sezione dei commenti --}}
        <div class="row d-flex  justify-content-center">

            <div class="headings d-flex justify-content-between align-items-center mb-3">
                <h5>Sezione commenti</h5>
            </div>

            <div class="container overflow-auto list-comment">
                @for ($i = 1; $i <= 10; $i++)
                    {{-- Inizio commento --}}
                    <div class="card p-3">

                        <div class="d-flex justify-content-between align-items-center">

                            <div class="user d-flex flex-row align-items-center">

                                <img src="https://i.imgur.com/hczKIze.jpg" width="30"
                                    class="user-img rounded-circle mr-2">
                                <span><small class="font-weight-bold text-primary">james_olesenn</small> <small
                                        class="font-weight-bold">Hmm, This poster looks cool</small></span>
                            </div>


                            <small>2 days ago</small>

                        </div>


                        <div class="action d-flex justify-content-between mt-2 align-items-center">

                            <div class="reply px-4">
                                <small>Remove</small>
                                <span class="dots"></span>
                                <small>Reply</small>

                                <button type="button" class="btn btn-secondary border-0 bg-white  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="balck"
                                        class="bi bi-heart" viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                        class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                    <small>200</small>
                                </button>

                            </div>
                            <div class="icons align-items-center">
                                <i class="fa fa-check-circle-o check-icon"></i>
                            </div>
                        </div>
                    </div>
                    {{-- Fine commento --}}
                @endfor

                <a href="#" class="justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-clockwise"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                        <path
                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>
                    Carica
                    altro
                </a>

            </div>
            {{-- Aggiungi commento --}}
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Aggiungi un commento..."
                    aria-label="Aggiungi un commento..." aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Pubblica</button>
            </div>

        </div>
    @endsection
