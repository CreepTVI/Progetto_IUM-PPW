@extends('layouts.layout')
@section('content')
    <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Associazione</li>
        </ol>
    </nav>
    <div class="col-12 mt-5">
        @if ($association)
            <script src="/js/tags.js"></script>
            <link rel="stylesheet" href="/css/tags.css">

            <input hidden value="{{ $tags }}" id="association_tags">
            <div class="blog-post">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-sm-4">
                            <img src="{{ asset(Storage::url($association_photo)) }}"
                                class="img-thumbnail rounded float-left information-img" alt="Immagine del associazione">
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                                <div class="newOrExplore-container-copy m-3">
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="sm-0">{{ __('Nome associazione') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            {{ old('name', $association->name) }}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="sm-0">{{ __('Rappresentante') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            {{ old('email', $representative->email) }}
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="mb-0">{{ __('Descrizione') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">

                                            {{ old('description', $association->description) }}

                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-4 pl-0">
                                            <h6 class="mb-0">{{ __('Tags') }}</h6>
                                        </div>
                                        <div class="col-sm-8 text-secondary">
                                            @foreach ($tags as $tag)
                                                <span class="tag-circle">{{ $tag->name }}</span>
                                            @endforeach
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
                                                @else
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