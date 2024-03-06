@extends('layouts.layout')
@section('content')
    <div class="row">
        <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">Esplora</li>
                <li class="breadcrumb-item active" aria-current="page">Nome Thread</li>
            </ol>
        </nav>
    </div>

    <!-- Header nav per visualizzare i post/commenti/segnalazioni -->
    <div class="row m-3 justify-content-center ">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="thread-tab" data-bs-toggle="tab" data-bs-target="#thread-tab-pane"
                    type="button" role="tab" aria-controls="thread-tab-pane" aria-selected="true">Thread</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="comment-tab" data-bs-toggle="tab" data-bs-target="#comment-tab-pane"
                    type="button" role="tab" aria-controls="comment-tab-pane" aria-selected="false">Commenti</button>
            </li>
            {{-- <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Segnala</button>
            </li> --}}
        </ul>

        <div class="tab-content" id="myTabContent">
            <!-- Tab dei thread -->
            <div class="tab-pane fade show active" id="thread-tab-pane" role="tabpanel" aria-labelledby="thread-tab"
                tabindex="0">
                <div class="mt-5 ml-2" id="blog-post-card">
                    <div class="row g-3">
                        @if ($thread->photo)
                            <div class="col-12 col-xl-4 order-xl-1 m-0 sec-img">
                                <img src="{{ asset(Storage::url($thread->photo)) }}"
                                    class="img-fluid rounded-start img-thread" alt="...">
                            </div>
                            <div class="w-100 d-xl-none"></div>

                            <div class="col-12 col-xl-8 order-xl-2 m-0">
                            @else
                                <div class="col-12">
                        @endif

                        <div class="newOrExplore-container-copy m-0">
                            <div class="row mt-3 mb-3">
                                <div class="col d-flex">
                                    <div class="img-pod-card">
                                        <img class="user-icon" src="{{ asset(Storage::url($user->photo)) }}"
                                            alt="random image">
                                    </div>
                                    <p class="m-3">{{ $creator->name }}</p>
                                </div>
                                <div class="col d-flex  justify-content-end">
                                    @if ($thread->user_id == auth()->user()->id)
                                        <div class="dropdown">
                                            <a href="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <form action="{{ route('thread.delete') }}" method="POST">
                                                        @csrf
                                                        @method('delete')
                                                        <input type="hidden" name="thread_id"
                                                            value="{{ $thread->id }}" />
                                                        <a class="dropdown-item" href="{{ route('thread.delete') }}"
                                                            onclick="event.preventDefault(); this.closest('form').submit();">Elimina</a>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <div class="row">
                                <h6>{{ $thread->created_at->formatLocalized('%d/%m/%Y') }}</h6>
                                <h3>{{ $thread->title }}</h3>
                                <p>{{ $thread->text }}</p>

                                <div class="col-sm-8 text-secondary">
                                    @if ($tags)
                                        <label>Tags:
                                            @foreach ($tags as $tag)
                                                <span class="tag-circle">{{ $tag->name }}</span>
                                            @endforeach
                                        </label>
                                    @endif
                                </div>
                                <div class="like-container">
                                    <button type="button" class="like-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="balck"
                                            class="bi bi-heart" viewBox="0 0 16 16">
                                            <path
                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"
                                            class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg><small class="m-3">200</small>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Tab dei commenti -->
    <div class="tab-pane fade" id="comment-tab-pane" role="tabpanel" aria-labelledby="comment-tab" tabindex="0">
        <div class="row d-flex justify-content-center">

            <div class="overflow-auto list-comment">
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
                    <!--Fine commento -->
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
    </div>

    <!-- Tab dei segnalazioni -->
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
        ...</div>
    </div>
    </div>
@endsection
