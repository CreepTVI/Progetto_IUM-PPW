<!-- Navigazione header -->
@include('layouts.navigation')
<!-- Fine Navigazione header-->
<!-- Notifiche -->
@include('partials.notifications')
<!-- Fine Notifiche -->

<body class="standar-body">
    <main>
        <!--
            Sezione dedicata a contenere le voci del menu di navigazione:
            -   Titolo
            -   Icona/descrizione della Home
            -   Icona/descrizione del Associazione
            -   Icona/descrizione del Esplora Thread
            -   Icone/descrizione di log-out
        -->
        <div id="main-container">
            <aside class="menu">
                <ul class="menu-content">
                    <li>
                        <form action="{{ route('home') }}">
                            @csrf
                            <a href="{{ route('home') }}"
                                onclick="event.preventDefault(); this.closest('form').submit();"><span
                                    class="material-symbols-outlined">home</span><span>{{ __('general.home') }}</span></a>
                        </form>
                    </li>
                    <li>
                        <form action="{{ route('explore') }}">
                            <a href="{{ route('explore') }}"
                                onclick="event.preventDefault(); this.closest('form').submit();"><span
                                    class="material-symbols-outlined">explore</span><span>{{ __('general.explore') }}</span></a>
                        </form>
                    </li>
                    <li>
                    <li><a href="{{ route('association.edit') }}"><span
                                class="material-symbols-outlined">group</span><span>{{ __('general.association') }}</span></a>
                    </li>
                    <hr class="rounded">
                    <li>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <a href="{{ route('logout') }}"
                                onclick="event.preventDefault(); this.closest('form').submit();"><span
                                    class="material-symbols-outlined">logout</span><span>{{ __('general.logout') }}</span></a>
                        </form>
                    </li>
                </ul>
            </aside>
            <div class="container-xl">
                <div class="m-3">

                    @yield('content')
                </div>
            </div>

        </div>
    </main>

    <footer class="footer">

        <p> &copy;Danilo Ivone, Daniele Esposito | {{ __('general.footer_rigth') }}</p>
    </footer>

</body>
