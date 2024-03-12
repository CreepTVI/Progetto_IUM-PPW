@if ($comment_count > 0)
    @foreach ($comments as $comment)
        {{-- Inizio commento --}}
        <div class="card p-3">

            <div class="d-flex justify-content-between align-items-center">

                <div class="user d-flex flex-row align-items-center">
                    @php
                        $photo = $comment->commentator->photo
                            ? asset(Storage::url($comment->commentator->photo))
                            : asset('img/profile.png');
                    @endphp
                    <img src="{{ $photo }}" width="30" class="user-icon mr-2 shadow-none">
                    <span><small class="font-weight-bold text-primary">{{ $comment->commentator->name }}</small>
                        <small class="font-weight-bold">{{ $comment->comment }}</small></span>
                </div>

                <small>{{ $comment->created_at->diffForHumans() }}</small>

            </div>


            <div class="action d-flex justify-content-between mt-2 align-items-center">

                {{-- <div class="reply px-4">
                <small>Remove</small>
                <span class="dots"></span>
                <small>Reply</small>

                <button type="button" class="btn btn-secondary border-0 bg-white  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="balck"
                        class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                        class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                    <small>200</small>
                </button>
            </div> --}}
            </div>
        </div>
    @endforeach
@else
    <h3>{{ __('general.No comment') }}</h3>
@endif
<!--Fine commento -->
