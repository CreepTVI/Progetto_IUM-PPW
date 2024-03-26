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


            </div>
        </div>
    @endforeach
@else
    <h3>{{ __('general.No comment') }}</h3>
@endif
<!--Fine commento -->
