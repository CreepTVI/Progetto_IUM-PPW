<div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#delete-association"
        aria-label="Second group">
        {{ __('general.user_left_association') }}
    </button>
</div>

<!-- Modal per la modifica della password -->
<div class="modal fade" id="delete-association" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel"> {{ __('general.user_left_association') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="POST" action="{{ route('association.left') }}" class="p-6">
                    @csrf

                    <h2 class="text-lg font-medium text-gray-900">
                        {{ __('general.are you sure?') }}
                    </h2>

                    <div class="mb-3">

                        <input id="password" name="password" type="password" class="form-control"
                            aria-describedby="text" placeholder="{{ __('general.password') }}">

                    </div>

                    <div class="mt-6 flex justify-end">

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                                onclick="$dispatch('close')">{{ __('general.cancel') }}</button>
                            <div class="flex items-center gap-4">
                                <button type="submit"
                                    class="btn btn-outline-danger">{{ __('general.confirm') }}</button>

                                @if (session('status') === 'password-updated')
                                    <p x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 2000)"
                                        class="text-sm text-gray-600">{{ __('general.save') }}</p>
                                @endif
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
