@extends('layouts.layout')
@section('content')
    {{-- Contenuti pagina utente:
        -   Distingurere fra rappresentante associazione e utente classico
        -   Inserire immagine scelta dall'utente
        -   Tasto di modifica del profilo
        -   Visualizzazione del:
                -   email
                -   password
                -   img
        --}}

    <link rel="stylesheet" href="/css/user.css">
    <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
        </ol>
    </nav>

    <form id="send-verification" method="post" action="{{ route('verification.send') }}">
        @csrf
    </form>

    <!--Informazioni utete-->
    <div class="blog-post">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-sm-4">
                    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                        class="img-fluid rounded-start" alt="...">
                </div>

                <div class="col-md-8">
                    <div class="row">
                        <div class="newOrExplore-container-copy m-3">
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-sm-4 pl-0">
                                        <h6 class="sm-0">Username</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                        {{ old('name', $user->name) }}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-4 pl-0">
                                        <h6 class="sm-0">Email</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                        {{ old('email', $user->email) }}
                                    </div>
                                </div>

                                <hr>
                                <div class="row">
                                    <div class="col-sm-4 pl-0">
                                        <h6 class="mb-0">Associazione</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                        @if ($user->association)
                                            {{ old('association', $user->association->name) }}
                                        @endif
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </div>

                    <div class="row mr-3 mt-5 pb-3">
                        <div class="position-relative">

                            <div class="btn-toolbar position-absolute bottom-0 end-0" role="toolbar"
                                aria-label="Toolbar with button groups">

                                <div class="btn-group me-2" role="group" aria-label="Third group">
                                    @include('profile.partials.delete-user-form')
                                </div>

                                @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && !$user->hasVerifiedEmail())
                                    <div class="btn-group" role="group" aria-label="Foth group">
                                        <button class="btn btn-outline-warning " form="send-verification"
                                            class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            {{ __('Click here to re-send the verification email.') }}
                                        </button>
                                    </div>
                                    <div>

                                        {{-- {{ __('Your email address is unverified.') }} --}}


                                        {{-- @if (session('status') === 'verification-link-sent')
                                            <p class="mt-2 font-medium text-sm text-green-600">
                                                {{ __('A new verification link has been sent to your email address.') }}
                                            </p>
                                        @endif --}}
                                    </div>
                                @else
                                    <div class="btn-group me-2" role="group" aria-label="First group">
                                        @include('profile.partials.update-profile-information-form')
                                    </div>
                                    <div class="btn-group me-2" role="group" aria-label="Second group">
                                        @include('profile.partials.update-password-form')
                                    </div>
                                @endif
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
@endsection
