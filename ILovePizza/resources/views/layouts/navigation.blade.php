<head>
    <meta charset="UTF-8">
    <meta name="author" content="Danilo Ivone">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>

    <!-- Css personalizzati -->
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/thread-card.css">
    <link rel="stylesheet" href="/css/assosiation-box.css">
    <link rel="stylesheet" href="/css/comment.css">

    <!-- Script -->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <!-- Bootstrap link -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

</head>

<header class="header-outer">
    <!--
            Sezione dedicata a contenere:
            -   La search bar
            -   L'icona per aggiungere un nuovo post
            -   L'icona delle notifihe
            -   Il logo del sito
        -->
    <div class="container-fluid p-3">
        <nav x-data="{ open: false }" class="header-inner responsive-wrapper ">

            <div class="row">

                <div class="col-4">
                    <figure class="header-logo m-0">
                        <a href="{{ route('dashboard') }}">
                            <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" />
                        </a>
                    </figure>
                </div>

                <div class="col-4">
                    <form id="search-bar" action="">
                        <input id="search" type="search" required>
                        <i class="fa fa-search"></i>
                        <a href="javascript:void(0)" id="clear-btn">Clear</a>
                    </form>
                </div>

                <div class="col-4" id="nav">
                    <div class="header-navigation">

                        <a href="#">
                            <span class="material-symbols-outlined">notifications</span>
                        </a>
                        <a href="#"><span class="material-symbols-outlined">add</span></a>

                        <div class="dropdown">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                style="outline: none">
                                <span class="material-symbols-outlined">person</span>
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <h6 class="dropdown-header">{{ Auth::user()->name }}</h6>
                                </li>
                                <li><a class="dropdown-item" href="{{ route('profile.edit') }}">{{ __('Profile') }}</a>
                                </li>

                                <li>
                                    <form method="POST" action="{{ route('logout') }}" id="logout">
                                        @csrf
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                            onclick="event.preventDefault(); this.closest('form').submit();">{{ __('Log out') }}</a>
                                    </form>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </nav>
    </div>
</header>
