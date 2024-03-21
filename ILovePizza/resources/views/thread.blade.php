@extends('layouts.layout')
@section('content')
    <script src="{{ asset('js/controller-view/thread.js') }}"></script>
    <script src="{{ asset('js/controller-view/comment.js') }}"></script>

    {{ Breadcrumbs::render('thread', $thread) }}

    <!-- Header nav per visualizzare i post/commenti/segnalazioni -->
    <div class="row m-3 justify-content-center ">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="thread-tab" data-bs-toggle="tab" data-bs-target="#thread-tab-pane"
                    type="button" role="tab" aria-controls="thread-tab-pane"
                    aria-selected="true">{{ __('general.thread') }}</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="comment-tab" data-bs-toggle="tab" data-bs-target="#comment-tab-pane"
                    type="button" role="tab" aria-controls="comment-tab-pane"
                    aria-selected="false">{{ __('general.comments') }}</button>
            </li>
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
                                    class="img-fluid rounded-start img-thread" alt="Thread photo">
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
                                        @php
                                            $photo = $user->photo
                                                ? asset(Storage::url($user->photo))
                                                : asset('img/profile.png');
                                        @endphp
                                        <img class="user-icon" src="{{ $photo }}" alt="random image">
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
                                <p>{!! $thread->text !!}</p>

                                <div class="col-sm-8 text-secondary">
                                    @if ($tags)
                                        <label>{{ __('general.tag') }}:
                                            @foreach ($tags as $tag)
                                                <span class="tag-circle">{{ $tag->name }}</span>
                                            @endforeach
                                        </label>
                                    @endif
                                </div>
                                <div class="like-container" id="like-container">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Tab dei commenti -->
    <div class="tab-pane fade" role="tabpanel" aria-labelledby="comment-tab" tabindex="0" id="comment-tab-pane">
        <div class="row">
            <div class="list-comment">
                <div id="comment-container">
                </div>
                <div class="load-more-container text-center m-3">
                    <a href="#" class="load-more btn-primary-new-post" id="load-more">
                        <i class="bi bi-arrow-clockwise"></i>
                        {{ __('general.load-more') }}
                    </a>
                </div>
            </div>
        </div>

        <!-- Aggiungi commento -->
        <form action="{{ route('thread.add.comment', $thread->id) }}" method="POST" id="add-comment-form">
            <div class="input-group mb-3">
                @csrf
                <input type="hidden" name="user_id" value="{{ auth()->user()->id }}">
                <input type="text" id="comment-input" name="text" class="form-control"
                    placeholder="{{ __('general.add-comment') }}" aria-label="Aggiungi un commento..."
                    aria-describedby="btn-add-comment" autocomplete="false">
                <button class="btn btn-outline-secondary" type="submit">{{ __('general.public') }}</button>
            </div>
        </form>
    </div>
@endsection
