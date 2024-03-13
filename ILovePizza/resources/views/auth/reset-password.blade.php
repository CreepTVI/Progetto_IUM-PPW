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

    <link rel="stylesheet" href="/css/login.css">


</head>

<!-- Notifiche -->
@include('partials.notifications')
<!-- Fine notifiche-->


<header class="standard-header">
    <h1>{{ __('general.app_name') }}</h1>
</header>


<body class="standar-body">
    <div class="container" id="container">
        <!-- Form per il reset della password -->
        <div class="form-container sign-in-container">
            <form method="POST" action="{{ route('password.store') }}">
                @csrf

                <!-- Password Reset Token -->
                <input type="hidden" name="token" value="{{ $request->route('token') }}">

                <!-- Email Address -->
                <div>
                    <x-text-input id="email" class="block mt-1 w-full" type="email" name="email"
                        :value="old('email', $request->email)" required autofocus autocomplete="username"
                        placeholder="{{ __('general.email') }}" />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <x-text-input id="password" class="block mt-1 w-full" type="password" name="password" required
                        autocomplete="new-password" placeholder="{{ __('general.password') }}" />
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

                <!-- Confirm Password -->
                <div class="mt-4">

                    <x-text-input id="password_confirmation" class="block mt-1 w-full" type="password"
                        name="password_confirmation" required autocomplete="new-password"
                        placeholder="{{ __('general.password_confirmation') }}" />

                    <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <x-primary-button>
                        {{ __('general.confirm') }}
                    </x-primary-button>
                </div>
            </form>
        </div>

        <!-- Welcome  -->
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>{{ __('general.insert_credentials') }}</h1>
                    <p>{{ __('general.credentials_info') }}
                    </p>
                </div>
            </div>
        </div>
        <footer>
        </footer>
        @include('popper::assets')
</body>

</html>
