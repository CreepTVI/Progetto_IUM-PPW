@extends('layouts.layout')
@section('content')
    <script src="/js/tags.js"></script>
    <script src="/js/controller-view/association.js"></script>
    <link rel="stylesheet" href="/css/tags.css">

    {{ Breadcrumbs::render('association') }}
    <div class="col-12 mt-5">
        @if ($association)

            <input hidden value="{{ $tags }}" id="association_tags">
            <div class="blog-post">
                <div class="mb-3">
                    <div class="row g-0">
                        <div class="col-md-4 sec-img">
                            @php
                                $photo = $association_photo
                                    ? asset(Storage::url($association_photo))
                                    : asset('img/default-image.jpg.webp');
                            @endphp
                            <img src="{{ $photo }}" class="img-fluid rounded-start img-thread"
                                alt="Immagine dell'associazione">
                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="newOrExplore-container-copy m-3">
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="sm-0">{{ __('general.name') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            {{ old('name', $association->name) }}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="sm-0">{{ __('general.representative') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            {{ old('email', $representative->email) }}
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="mb-0">{{ __('general.descr') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">

                                            {{ old('description', $association->description) }}

                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="mb-0">{{ __('general.tags') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            @if ($tags)
                                                @foreach ($tags as $tag)
                                                    <span class="tag-circle">{{ $tag->name }}</span>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row mr-3 mt-5 bottom-0 end-0">
                                        <div class="position-relative">
                                            <div class="btn-toolbar position-absolute bottom-0 end-0" role="toolbar"
                                                aria-label="Toolbar with button groups">
                                                @if ($user->hasRole('representative'))
                                                    <div class="btn-group me-2" role="group">
                                                        @include('association.partials.delete-association-form')
                                                    </div>
                                                    <div class="btn-group me-2" role="group">
                                                        @include('association.partials.update-association-information-form')
                                                    </div>
                                                    <div class="btn-group me-2" role="group">
                                                        @include('association.partials.send-invitation-association-form')
                                                    </div>
                                                @elseif ($user->hasRole('member'))
                                                    <div class="btn-group me-2" role="group">
                                                        @include('association.partials.left-association-form')
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        @else
            @include('association.partials.create-association-form')
        @endif
    </div>
@endsection
