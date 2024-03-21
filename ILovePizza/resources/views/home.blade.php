@extends('layouts.layout')
@section('content')
    <script src="{{ asset('js/controller-view/pagination-thread.js') }}"></script>
    {{ Breadcrumbs::render('home') }}
    <div class="row m-3">
        <!-- Sezione dei post -->
        <label for="thread-list-container">{{ __('general.your_thread') }}</label>
        <div class="col-8">
            <div id="thread-list-container">
            </div>
        </div>

        <!--Sezione delle info-->
        <div class="col-4 h-75 ">
            <div class="accordion w-100" id="accordionExample">
                <!-- Thread recenti -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {{ __('general.recent_threads') }}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                            @foreach ($recent_threads as $thread)
                                <a href="{{ route('thread.show', $thread->id) }}"
                                    class="list-group-item list-group-item-action">
                                    <div class="justify-content-between">
                                        <h6>{{ $thread->title }}</h6>
                                        <small>{{ $thread->created_at->diffForHumans() }}</small>
                                    </div>
                                    <small>{{ __('general.autor') }}: {{ $thread->user->name }} -
                                        {{ $thread->user->association->name }}</small>
                                </a>
                            @endforeach

                        </div>
                    </div>
                </div>

                <!-- Utenti associazione -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            {{ __('general.members') }}
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="list-user" style="">

                                <ul class="list-group">
                                    @if ($members)
                                        <a href="{{ route('users.index', $representative->id) }}">
                                            <li class="list-group-item list-group-item-action user-item text-center">
                                                <div class="media">
                                                    @php
                                                        $photo = $representative->photo
                                                            ? asset(Storage::url($representative->photo))
                                                            : asset('img/profile.png');
                                                    @endphp
                                                    <img class="align-self-start mr-3 img-user user-icon"
                                                        src="{{ $photo }}">
                                                    <div class="media-body">
                                                        <h6 class="mt-0">{{ $representative->email }}</h6><br>
                                                        <small>{{ __('general.representative') }}</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </a>

                                        @foreach ($members as $member)
                                            <a href="{{ route('users.index', $member->id) }}">
                                                <li class="list-group-item list-group-item-action user-item text-center">
                                                    <div class="media">
                                                        @php
                                                            $photo = $member->photo
                                                                ? asset(Storage::url($member->photo))
                                                                : asset('img/profile.png');
                                                        @endphp

                                                        <img class="align-self-start mr-3 img-user user-icon"
                                                            src="{{ $photo }}">
                                                        <div class="media-body">
                                                            <h6 class="mt-0">{{ $member->email }}</h6><br>
                                                            <small>{{ __('general.member') }}</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>
                                        @endforeach
                                    @endif
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
