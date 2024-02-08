<!DOCTYPE html>
<x-auth-session-status class="mb-4" :status="session('status')" />

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="author" content="Danilo Ivone">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

    <link rel="stylesheet" href="/css/login.css">
    <script src="{{ asset('/js/login.js') }}"></script>


</head>

<!-- Notifiche -->
@include('partials.notifications')
<!-- Fine notifiche-->


<header class="standard-header">
    <h1>I Love Pizza</h1>
</header>


<body class="standar-body">

    @if (session('registration_form_active'))
        <div class="container right-panel-active" id="container">
        @else
            <div class="container" id="container">
    @endif

    <div class="form-container sign-up-container">
        {{-- action="{{ route('register') }}" --}}
        <!-- Form per la registrazione -->
        <form method="POST" action="{{ route('register') }}">
            @csrf
            <h1>Crea Account</h1>

            <span>o usa la tua mail per registrarti</span>
            <x-text-input placeholder="Nome" id="name" type="text" name="name" :value="old('name')" required
                autofocus autocomplete="name" />

            <x-text-input placeholder="Email" id="email" type="email" name="email" :value="old('email')" required
                autocomplete="username" />

            <x-text-input placeholder="Password" id="password" type="password" name="password" required
                autocomplete="new-password" />

            <x-text-input placeholder="Conferma password" id="password_confirmation" type="password"
                name="password_confirmation" required autocomplete="new-password" />


            {{-- <x-input-label for="associazione" {!! Popper::trigger(false, true, true)->warning(
                'QUESTO CAMPO NON È OBBLIGATORIO, Inserisci SOLO se vuoi rappresentrae un associazione',
            ) !!} />
            <x-text-input placeholder="Associazione" id="association" type="text" name="association"
                autocomplete="name" />
            <x-input-error :messages="$errors->get('association')" class="mt-2" /> --}}

            <x-primary-button class="ms-4">
                Registrati
            </x-primary-button>
        </form>
    </div>

    <!-- Form per l'accesso -->
    <div class="form-container sign-in-container">
        <form method="POST" action="{{ route('login') }}" id="login">
            @csrf

            <h1>Log in</h1>

            <span>o usa il tuo account</span>

            <!-- Email Address -->
            <x-text-input placeholder="Email" id="email" type="email" name="email" :value="old('email')" required
                autofocus autocomplete="username" />


            <!-- Password -->
            <x-text-input placeholder="Password" id="password" type="password" name="password" required
                autocomplete="current-password" />

            {{-- <select class="form-select" id="user_type_choice" name="user_type" form="login" aria-label="Default"
                required>
                <option value="" disabled selected>Seleziona un tipo di utente</option>
                <option value="1">Utente</option>
                <option value="2">Rappresentante</option>
            </select> --}}


            @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}">
                    Password dimenticata?
                </a>
            @endif


            <div style="display: flex; align-items: center;">
                <span><label for="remember_me">Ricorda</label></span>
                <input id="remember_me" type="checkbox" name="remember" style="max-width: 20px; margin-left: 5px;">
            </div>

            <x-primary-button class="ms-3">
                {{ __('Log in') }}
            </x-primary-button>

        </form>
    </div>

    <!-- Welcome  -->
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1>Bentornato!</h1>
                <p>Per tenerti connesso con noi accedi con le tue credenziali</p>
                <button class="ghost" id="signIn">Log in</button>
            </div>
            <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Inserisci i tuoi dati personali e inizia il tuo percorso con noi!</p>
                <button class="ghost" id="signUp">Registrati</button>
            </div>
        </div>
    </div>
    <footer>
    </footer>
    @include('popper::assets')
</body>

</html>
