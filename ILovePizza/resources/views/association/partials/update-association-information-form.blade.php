<div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#edit-association"
        aria-label="First group">
        Modifca
    </button>
</div>

<!-- Modal per la modifica -->
<div class="modal fade" id="edit-association" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ __('Profile Information') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="post" action="{{ route('association.update') }}" class="mt-6 space-y-6"
                    id="update-association" enctype="multipart/form-data">
                    @csrf
                    @method('patch')

                    <input type="hidden" name="id" hidden value="{{ $association->id }}">

                    <div class="mb-3">
                        <label for="name" class="form-label">{{ __('Name') }}</label>

                        <input id="name" name="name" type="text" class="form-control"
                            aria-describedby="text"required autofocus autocomplete="name"
                            value="{{ old('name', $association->name) }}">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">{{ __('Description') }}</label>
                        <textarea class="form-control" name="description" id="description" rows="3" placeholder="Descrizione">{{ old('description', $association->description) }}</textarea>
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="tags" aria-describedby="tagsHelp"
                            autocomplete="additional-tags" autofocus placeholder="Tag per i tipi della tua associazione"
                            list="tag-list">
                        <datalist id="tag-list">
                            @foreach ($suggested as $tag)
                                <option value="{{ $tag->name }}">
                            @endforeach
                        </datalist>
                        <div id="tags-container"></div>
                        <div id="tagsHelp" class="form-text">Inserisci i tipi di pizza della tua associazione</div>
                    </div>

                    <hr>

                    <div class="mb-3">
                        <label for="photo" class="form-label">{{ __('Photo') }}</label><br>
                        <input name="photo" class="load-up" type="file" id="photo" accept="image/*">
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Chiudi</button>
                        <div class="flex items-center gap-4">
                            <button type="submit" class="btn btn-outline-success">{{ __('Save') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
