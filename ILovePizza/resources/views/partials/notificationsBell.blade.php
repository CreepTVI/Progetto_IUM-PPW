@if (auth()->user()->unreadNotifications->count() > 0)
    @foreach (auth()->user()->unreadNotifications as $notification)
        <li>
            <p class="dropdown-item"><a
                    href="{{ route('mark-notification', ['notification_id' => $notification->id, 'thread_id' => $notification->data['thread_id']]) }}">{{ $notification->data['message'] }}</a>
            </p>
        </li>
    @endforeach
@else
    <li>
        <p class="dropdown-item">{{ __('general.notification_0') }}</p>
    </li>
@endif
