@extends('layouts.layout')
@section('content')
    {{-- Visualizzazione:
    -   filtri di ricerca dei thread
        -   popolari
        -   recenti
        -   assoicazione
        -   tag
    -   elenco dei thread 
    --}}
    <script src="/js/controller-view/pagination-thread.js"></script>

    {{-- Filtri --}}
    <!-- action ={ { route('threads.index') } } -->
    <div class="row m-3">
        <form method="GET" action="{{ route('thread.list') }}" id="filter-form" class="mb-3">
            <div class="input-group input-group-sm">
                <span class="input-group-text ">Data da - a</span>
                <input type="date" name="filter_date_from" class="form-control">
                <input type="date" name="filter_date_at" class="form-control">


                <div class="input-group input-group-sm mt-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Tag</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm" name="filter_tag">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Associazione</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm" name="filter_association">
                </div>

                <div class="btn-group-sm mt-3">
                    <button type="submit" class="btn btn-outline-success">Filtra</button>
                    <button type="reset" class="btn btn-outline-danger">Cancella</button>
                </div>
            </div>
        </form>

        <!-- Thread -->
        <div id="thread-list-container">
        </div>
    </div>
@endsection
