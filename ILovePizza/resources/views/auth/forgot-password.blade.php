<!DOCTYPE html>
<x-auth-session-status class="mb-4" :status="session('status')" />

<head>
    <title>Recupera password</title>
    <meta charset="UTF-8">
    <meta name="author" content="Danilo Ivone">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

<link rel="stylesheet" href="{{ asset('css/login.css') }}">
</head>

<!-- Notifiche -->
@include('partials.notifications')
<!-- Fine notifiche-->


<header class="standard-header">
    <h1>{{ __('general.app_name') }}</h1>
</header>


<body class="standar-body">

    <div class="container" id="container">
        <!-- Form per l'accesso -->
        <div class="form-container sign-in-container">

            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <h1>{{ __('passwords.password_recovery') }}</h1>

                <!-- Email Address -->
                <div class="mt-5">
                    <x-text-input id="email" class="block mt-1 w-full" type="email" name="email"
                        :value="old('email')" required autofocus placeholder="{{ __('Email') }}" />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <x-primary-button>
                        {{ __('passwords.email_reset_link') }}
                    </x-primary-button>
                </div>
                <a href="{{ route('login') }}">
                    {{ __('general.back') }}
                </a>

            </form>
        </div>

        <!-- Welcome  -->
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>{{ __('passwords.forget_password?') }}</h1>
                    <p>{{ __('passwords.Forgot your password?') }}
                    </p>
                </div>
            </div>
        </div>
        <footer>
        </footer>
        @include('popper::assets')
</body>

</html>
