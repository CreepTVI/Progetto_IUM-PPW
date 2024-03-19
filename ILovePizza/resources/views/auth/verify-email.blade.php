{{-- <x-guest-layout>
    <div class="mb-4 text-sm text-gray-600">
        {{ __('Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
    </div>

    @if (session('status') == 'verification-link-sent')
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ __('A new verification link has been sent to the email address you provided during registration.') }}
        </div>
    @endif

    <div class="mt-4 flex items-center justify-between">
        <form method="POST" action="{{ route('verification.send') }}">
            @csrf

            <div>
                <x-primary-button>
                    {{ __('Resend Verification Email') }}
                </x-primary-button>
            </div>
        </form>

        <form method="POST" action="{{ route('logout') }}">
            @csrf

            <button type="submit" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{ __('Log Out') }}
            </button>
        </form>
    </div>
</x-guest-layout> --}}

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

<link rel="stylesheet" href="{{ asset('css/login.css') }}">

</head>

<!-- Notifiche -->
@include('partials.notifications')
<!-- Fine notifiche-->

<header class="standard-header">
    <h1>I Love Pizza</h1>
</header>


<body class="standar-body">

    @if (session('status') == 'verification-link-sent')
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ __('A new verification link has been sent to the email address you provided during registration.') }}
        </div>
    @endif
    <div class="container right-panel-active" id="container">

        <div class="form-container sign-up-container">
            <!-- Form per la registrazione -->

            <form method="POST" action="{{ route('verification.send') }}">
                @csrf
                <h1>Verifica la tua mail</h1>
                <div>
                    <x-primary-button class="mt-5">
                        {{ __('Resend Verification Email') }}
                    </x-primary-button>
                </div>
            </form>

            <form method="POST" action="{{ route('logout') }}">
                @csrf

                <button type="submit"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {{ __('Log Out') }}
                </button>

            </form>
        </div>

        <!-- Form per l'accesso -->
        <div class="form-container sign-in-container">

        </div>

        <!-- Welcome  -->
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Bentornato!</h1>
                    <p>{{ __('Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
                    </p>
                </div>
                <div class="overlay-panel overlay-right">

                </div>
            </div>
        </div>
        <footer>
        </footer>
        @include('popper::assets')
</body>

</html>
