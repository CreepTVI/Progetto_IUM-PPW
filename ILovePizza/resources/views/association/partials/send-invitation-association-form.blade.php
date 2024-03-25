<div class="btn-group me-2" role="group">

    <button id="open-modal-list" action type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
        data-bs-target="#list-users" aria-label="First group">
        {{ __('general.add_member') }}
    </button>

</div>
<input hidden value="{{route('users.index')}}" id="routeUserIndex">
<!-- Modal per la modifica -->
<div class="modal fade h-50" id="list-users" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ __('general.add_member') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div class="modal-body">
                <div class="sticky-top input-group mb-3">
                    <span class="input-group-text"><i class="bi bi-search"></i></span>
                    <input id="search-user" type="text" class="form-control"
                        placeholder="{{ __('general.search_user') }}">
                </div>
                <form id="send-invitation" action="{{ route('association.send') }}" method="POST">
                    @csrf
                    <input type="hidden" name="association_id" value="{{ $association->id }}">
                    <ul class="list-group list-group-flush m-3" id="show">
                    </ul>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Chiudi</button>
                <div class="flex items-center gap-4">
                    <button form="send-invitation" type="submit"
                        class="btn btn-outline-success">{{ __('Invita') }}</button>
                </div>
            </div>
        </div>
    </div>
</div>
