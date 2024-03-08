<form action="{{ route('thread.update.like', $thread->id) }}" method="POST" class="like-form">
    @csrf
    <button type="button" class="like-btn {{ $thread->liked ? 'red' : 'gray' }}" id="like-btn">
        @if ($thread->liked)
            <i class="bi bi-heart-fill red"></i>
        @else
            <i class="bi bi-heart-fill gray"></i>
        @endif

    </button>
    <small class="m-3 like-count">{{ $thread->likeCount }}</small>
</form>
