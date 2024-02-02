<!-- Session Status -->

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

@if (Session::has('error'))
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
            <path
                d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
            <path
                d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
        </svg>
        <strong>Holy guacamole!</strong> {{ session::get('error') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif

@if (Session::has('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">

        <div>
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path
                    d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            {{ session::get('success') }}
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif

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
            <x-input-error :messages="$errors->get('name')" class="mt-2" />

            <x-text-input placeholder="Email" id="email" type="email" name="email" :value="old('email')" required
                autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />

            <x-text-input placeholder="Password" id="password" type="password" name="password" required
                autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />

            <x-text-input placeholder="Conferma password" id="password_confirmation" type="password"
                name="password_confirmation" required autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />


            <x-input-label for="associazione" {!! Popper::trigger(false, true, true)->warning(
                'QUESTO CAMPO NON È OBBLIGATORIO, Inserisci SOLO se vuoi rappresentrae un associazione',
            ) !!} />
            <x-text-input placeholder="Associazione" id="association" type="text" name="association"
                autocomplete="name" />
            <x-input-error :messages="$errors->get('association')" class="mt-2" />

            <x-primary-button class="ms-4">
                Registrati
            </x-primary-button>
        </form>
    </div>

    <!-- Form per l'accesso -->
    <div class="form-container sign-in-container">
        <form method="POST" action="{{ route('representative.login') }}">
            @csrf

            <h1>Log in</h1>

            <span>o usa il tuo account</span>

            <!-- Email Address -->
            <x-text-input placeholder="Email" id="email" type="email" name="email" :value="old('email')" required
                autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />

            <!-- Password -->
            <x-text-input placeholder="Password" id="password" type="password" name="password" required
                autocomplete="current-password" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />


            <a href="{{ route('password.request') }}">
                Password dimenticata?
            </a>


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
    {{-- @if (Session::has('error'))
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{{ session::get('error') }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif --}}
    </div>

    <footer>
    </footer>
    @include('popper::assets')
</body>

</html>
