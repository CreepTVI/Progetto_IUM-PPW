<x-mail::message>

    {{ __('email.hello') }} {{ $user->name }} <br>
    {{ __('email.invitation body-start') }} <br> {{ $association->name }},
    <br>{{ __('email.invitation body-end') }}
    <x-mail::button :url="$invite_url">
        {{ __('email.invitation button') }}
    </x-mail::button>
    {{ __('email.thanks') }},<br>
    {{ config('app.name') }}
</x-mail::message>
