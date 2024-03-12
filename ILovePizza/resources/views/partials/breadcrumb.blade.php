{{-- <nav aria-label="breadcrumb" class="main-breadcrumb" style="margin-top: 10px">
    <ol class="breadcrumb">

        {{-- @foreach (session('breadcrumbs', []) as $url => $name)
            <li class="breadcrumb-item">

                <a href="{{ url($url) }}">{{ $name }}</a>
            </li>
        @endforeach 
    </ol>
</nav> --}}
{{-- resources/views/partials/breadcrumbs.blade.php --}}

@unless ($breadcrumbs->isEmpty())
    <ol class="breadcrumb">
        @foreach ($breadcrumbs as $breadcrumb)
            @if (!is_null($breadcrumb->url) && !$loop->last)
                <li class="breadcrumb-item"><a href="{{ $breadcrumb->url }}">{{ $breadcrumb->title }}</a></li>
            @else
                <li class="breadcrumb-item active">{{ $breadcrumb->title }}</li>
            @endif
        @endforeach
    </ol>
@endunless
