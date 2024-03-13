<x-mail::message>
    {{ __('email.hello') }} {{ $user->name }}
    {{ __('email.invitation body-start') }} {{ $association->name }},
    {{ __('email.invitation body-end') }}
    <x-mail::button :url="$invite_url">
        {{ __('email.invitation button') }}
    </x-mail::button>
    {{ __('email.thanks') }},<br>
    {{ config('app.name') }}
</x-mail::message>
