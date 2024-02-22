<script src="js/controller-view/association.js"></script>


<div class="btn-group me-2" role="group">

    <button id="open-modal-list" action type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
        data-bs-target="#list-users" aria-label="First group">
        Aggiungi membro
    </button>

</div>

<!-- Modal per la modifica -->
<div class="modal fade" id="list-users" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ __('Aggiungi un membro') }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div class="modal-body">
                <div class="sticky-top input-group mb-3">
                    <span class="input-group-text"><i class="bi bi-search"></i></span>
                    <input id="search-user" type="text" class="form-control" placeholder="cerca fra gli utenti...">
                </div>
                <form id="send-invitation" action="{{ route('association.send') }}" method="POST">
                    @csrf
                    <input type="hidden" name="association_id" value="{{ $association->id }}">
                    <ul class="list-group list-group-flush m-3" id="show">
                        {{-- <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li>
                        <li class="list-group-item"><input type="checkbox" name="selected_users[]" value="2"
                                id="user_checkbox_2" class="form-check-input form-check-lg"><label
                                for="user_checkbox_2">francesco@gmail.com</label></li> --}}
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
