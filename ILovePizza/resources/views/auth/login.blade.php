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
    <h1>{{ __('general.app_name') }}</h1>
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
            <h1>{{ __('general.account_create') }}</h1>

            <span>{{ __('general.account_create_alternative') }}</span>
            <x-text-input placeholder="{{ __('general.name') }}" id="name" type="text" name="name"
                :value="old('name')" required autofocus autocomplete="name" />

            <x-text-input placeholder="{{ __('general.email') }}" id="email" type="email" name="email"
                :value="old('email')" required autocomplete="username" />

            <x-text-input placeholder="{{ __('general.password') }}" id="password" type="password" name="password"
                required autocomplete="new-password" />

            <x-text-input placeholder="{{ __('general.password_confirmation') }}" id="password_confirmation"
                type="password" name="password_confirmation" required autocomplete="new-password" />

            <x-primary-button class="ms-4">
                {{ __('general.register') }}
            </x-primary-button>
        </form>
    </div>

    <!-- Form per l'accesso -->
    <div class="form-container sign-in-container">
        <form method="POST" action="{{ route('login') }}" id="login">
            @csrf

            <h1>{{ __('general.login') }}</h1>

            <span>{{ __('general.login_alternative') }}</span>

            <!-- Email Address -->
            <x-text-input placeholder="{{ __('general.email') }}" id="email" type="email" name="email"
                :value="old('email')" required autofocus autocomplete="username" />

            <!-- Password -->
            <x-text-input placeholder="{{ __('general.password') }}" id="password" type="password" name="password"
                required autocomplete="current-password" />

            @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}">
                    {{ __('passwords.forget_password?') }}
                </a>
            @endif

            <div style="display: flex; align-items: center;">
                <span><label for="remember_me">{{ __('general.remember_me') }}</label></span>
                <input id="remember_me" type="checkbox" name="remember" style="max-width: 20px; margin-left: 5px;">
            </div>

            <x-primary-button class="ms-3">
                {{ __('general.login') }}
            </x-primary-button>

        </form>
    </div>

    <!-- Welcome  -->
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1>{{ __('general.wellcomeback') }}</h1>
                <p>{{ __('general.login_info') }}</p>
                <button class="ghost" id="signIn">{{ __('general.login') }}</button>
            </div>
            <div class="overlay-panel overlay-right">
                <h1>{{ __('general.wellcome') }}</h1>
                <p>{{ __('general.register_info') }}</p>
                <button class="ghost" id="signUp">{{ __('general.register') }}</button>
            </div>
        </div>
    </div>
    <footer>
    </footer>
    @include('popper::assets')
</body>

</html>
