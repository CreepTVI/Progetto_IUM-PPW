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
                    <li><a href="#"><span class="material-symbols-outlined">home</span><span>Home</span></a></li>
                    <li><a href="#"><span class="material-symbols-outlined">explore</span><span>Esplora</span></a>
                    </li>
                    <li><a href="#"><span
                                class="material-symbols-outlined">group</span><span>Associazioni</span></a>
                    </li>
                    <hr class="rounded">
                    <li>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <a href="{{ route('logout') }}"
                                onclick="event.preventDefault(); this.closest('form').submit();"><span
                                    class="material-symbols-outlined">logout</span><span>Logout</span></a>
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
        <ul class="social-icon">
            <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
            <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a></li>
            <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a></li>
            <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
        </ul>
        <ul class="menu_info">
            <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
            <li class="menu__item"><a class="menu__link" href="#">About</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>
        </ul>
        <p>&copy;Danilo Ivone, Daniele Esposito | Tutti i diritti sono riservati</p>
    </footer>

</body>
