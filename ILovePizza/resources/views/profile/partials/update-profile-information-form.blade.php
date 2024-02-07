<div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#edit-profile"
        aria-label="First group">
        Modifca
    </button>
</div>

<!-- Modal per la modifica -->
<div class="modal fade" id="edit-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ __('Profile Information') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="post" action="{{ route('profile.update') }}" class="mt-6 space-y-6">
                    @csrf
                    @method('patch')

                    <div class="mb-3">
                        <label for="name" class="form-label">{{ __('Name') }}</label>

                        <input id="name" name="name" type="text" class="form-control"
                            aria-describedby="text"required autofocus autocomplete="name"
                            value="{{ old('name', $user->name) }}">
                        <x-input-error class="mt-2" :messages="$errors->get('name')" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">{{ __('Email') }}</label>
                        <input id="email" name="email" type="email" class="form-control"
                            aria-describedby="text"required autofocus autocomplete="username"
                            value="{{ old('email', $user->email) }}">
                        <x-input-error class="mt-2" :messages="$errors->get('email')" />
                    </div>
                    @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && !$user->hasVerifiedEmail())
                        <div>
                            <p class="text-sm mt-2 text-gray-800">
                                {{ __('Your email address is unverified.') }}

                                <button class="btn btn-outline-warning " form="send-verification"
                                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    {{ __('Click here to re-send the verification email.') }}
                                </button>
                            </p>

                            @if (session('status') === 'verification-link-sent')
                                <p class="mt-2 font-medium text-sm text-green-600">
                                    {{ __('A new verification link has been sent to your email address.') }}
                                </p>
                            @endif
                        </div>
                    @endif
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Chiudi</button>
                        <div class="flex items-center gap-4">
                            <button type="submit" class="btn btn-outline-success">{{ __('Save') }}</button>

                            @if (session('status') === 'profile-updated')
                                <p x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 2000)"
                                    class="text-sm text-gray-600">{{ __('Saved.') }}</p>
                            @endif
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
