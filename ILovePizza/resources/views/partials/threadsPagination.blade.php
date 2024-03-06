    <div class="row overflow-auto corp">
        <div class="col" id="thread-container">
            @if ($threads->count() > 0)
                @foreach ($threads as $thread)
                    <div class="blog-post">
                        <div class="container-copy">
                            <div class="row mt-3 mb-3">
                                <div class="col d-flex">
                                    <div class="img-pod-card">
                                        <img class="user-icon" src="{{ asset(Storage::url($thread->user->photo)) }}"
                                            alt="random image">
                                    </div>
                                    <p class="m-3">{{ $thread->user->name }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <h6>{{ $thread->created_at->formatLocalized('%d/%m/%Y') }}
                                    {{-- <span
                                class="badge badge-secondary">New</span> --}}
                                </h6>
                                <h3>{{ $thread->title }}</h3>
                                <p>{{ $thread->text }}</p>
                                {{-- <div class="col-sm-8 text-secondary"> --}}
                                {{-- @if ($tags)
                            <label>Tags:
                                @foreach ($tags as $tag)
                                    <span class="tag-circle">{{ $tag->name }}</span>
                                @endforeach
                            </label>
                        @endif --}}
                            </div>
                            <a class="btn-primary" href='{{ route('thread.show', $thread->id) }}' target="_blank">Read
                                More</a>
                        </div>
                    </div>
                @endforeach
            @else
                <h3><i class="bi bi-emoji-frown" style="font-size: 2rem;"></i> Non ci sono thread trovati.</h3>
            @endif
        </div>
    </div>


    <div class="pagination justify-content-end" id="pagination-links">
        @if ($threads->lastPage() > 1)
            <ul class="pagination">
                {{-- Previous Page Link --}}
                @if ($threads->onFirstPage())
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link">@lang('pagination.previous')</span>
                    </li>
                @else
                    <li class="page-item">
                        <a href="{{ $threads->previousPageUrl() }}" rel="prev"
                            class="page-link">@lang('pagination.previous')</a>
                    </li>
                @endif

                {{-- Pagination Elements --}}
                @for ($i = 1; $i <= $threads->lastPage(); $i++)
                    <li class="page-item {{ $threads->currentPage() == $i ? ' active' : '' }}">
                        <a href="{{ $threads->url($i) }}" class="page-link">{{ $i }}</a>
                    </li>
                @endfor

                {{-- Next Page Link --}}
                @if ($threads->hasMorePages())
                    <li class="page-item">
                        <a href="{{ $threads->nextPageUrl() }}" rel="next" class="page-link">@lang('pagination.next')</a>
                    </li>
                @else
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link">@lang('pagination.next')</span>
                    </li>
                @endif
            </ul>
        @endif
    </div>
