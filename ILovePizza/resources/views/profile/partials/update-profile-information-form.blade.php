<div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#edit-profile"
        aria-label="First group">
        {{ __('general.edit') }}
    </button>
</div>

<!-- Modal per la modifica -->
<div class="modal fade" id="edit-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ __('general.profile_info') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="post" action="{{ route('profile.update') }}" class="mt-6 space-y-6"
                    enctype="multipart/form-data">
                    @csrf
                    @method('patch')

                    <div class="mb-3">
                        <label for="name" class="form-label">{{ __('general.name') }}</label>
                        <input id="name" name="name" type="text" class="form-control"
                            aria-describedby="text"required autofocus autocomplete="name"
                            value="{{ old('name', $user->name) }}">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">{{ __('general.email') }}</label>
                        <input id="email" name="email" type="email" class="form-control"
                            aria-describedby="text"required autocomplete="username"
                            value="{{ old('email', $user->email) }}">
                    </div>

                    <div class="mb-3">
                        <label for="photo" class="form-label">{{ __('general.photo') }}</label><br>
                        <input name="photo" class="load-up" type="file" id="photo" accept="image/*">
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary"
                            data-bs-dismiss="modal">{{ __('general.cancel') }}</button>
                        <div class="flex items-center gap-4">
                            <button type="submit" class="btn btn-outline-success">{{ __('general.save') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
