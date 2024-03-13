<div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#password-change"
        aria-label="Second group">
        {{ __('general.password_update') }}
    </button>
</div>

<!-- Modal per la modifica della password -->
<div class="modal fade" id="password-change" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ __('Update Password') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form method="post" action="{{ route('password.update') }}" class="mt-6 space-y-6">
                    @csrf
                    @method('put')

                    <div class="mb-3">
                        <label for="update_password_current_password"
                            class="form-label">{{ __('general.current_password') }}</label>

                        <input id="update_password_current_password" name="current_password" type="password"
                            class="form-control" aria-describedby="text" autocomplete="current-password">

                    </div>

                    <div class="mb-3">
                        <label for="update_password_password"
                            class="form-label">{{ __('general.new_password') }}</label>

                        <input id="update_password_password" name="password" type="password" class="form-control"
                            aria-describedby="text" autocomplete="new-password">

                    </div>

                    <div class="mb-3">
                        <label for="update_password_password_confirmation"
                            class="form-label">{{ __('general.password_confirmation') }}</label>

                        <input id="update_password_password_confirmation" name="password_confirmation" type="password"
                            class="form-control" aria-describedby="text" autocomplete="new-password">

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
