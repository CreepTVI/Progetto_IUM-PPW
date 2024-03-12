<x-mail::message>
    Ciao {{ $user->name }}
    Hai ricevuto un invito dall'associazione {{ $association->name }},
    per diventare membro!
    <x-mail::button :url="$invite_url">
        Diventa membro!
    </x-mail::button>
    Grazie,<br>
    {{ config('app.name') }}
</x-mail::message>
