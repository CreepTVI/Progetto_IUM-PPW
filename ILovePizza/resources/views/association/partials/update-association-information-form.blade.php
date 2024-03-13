<div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#edit-association"
        aria-label="First group">
        {{ __('general.edit') }}
    </button>
</div>

<!-- Modal per la modifica -->
<div class="modal fade" id="edit-association" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ __('general.association_info') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="post" action="{{ route('association.update') }}" class="mt-6 space-y-6"
                    id="form-container" enctype="multipart/form-data">
                    @csrf
                    @method('patch')

                    <input type="hidden" name="id" hidden value="{{ $association->id }}">

                    <div class="mb-3">
                        <label for="name" class="form-label">{{ __('general.name') }}</label>

                        <input id="name" name="name" type="text" class="form-control"
                            aria-describedby="text"required autofocus autocomplete="name"
                            value="{{ old('name', $association->name) }}">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">{{ __('general.descr') }}</label>
                        <textarea class="form-control" name="description" id="description" rows="3" placeholder="Descrizione">{{ old('description', $association->description) }}</textarea>
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="tags" aria-describedby="tagsHelp"
                            autocomplete="additional-tags" autofocus placeholder="{{ __('general.tag_pizza') }}"
                            list="tag-list">
                        <datalist id="tag-list">
                            @foreach ($suggested as $tag)
                                <option value="{{ $tag->name }}">
                            @endforeach
                        </datalist>
                        <div id="tags-container"></div>
                        <div id="tagsHelp" class="form-text">{{ __('general.tags_desc_ass') }}</div>
                    </div>

                    <hr>

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
