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
    <link rel="stylesheet" href="/css/tags.css">

    <!-- Script -->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- Script personalizzati -->
    <script src="/js/controller-view/search.js"></script>

    <!-- Bootstrap link -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">

</head>

<header class="header-outer">
    <!--
            Sezione dedicata a contenere:
            -   La search bar
            -   l'icona profilo utente
            -   L'icona per aggiungere un nuovo post
            -   L'icona delle notifihe
            -   Il logo del sito
        -->
    <div class="container-fluid p-3">
        <nav x-data="{ open: false }" class="header-inner responsive-wrapper ">

            <div class="row">

                <div class="header-logo col-4">
                    <figure class="m-0">
                        <a href="{{ route('home') }}">
                            <img src="/img/ILovePizza_Logo.png" alt="Logo" />
                        </a>
                    </figure>
                </div>

                <div class="col-4 search-container">
                    <form id="search-form">
                        @csrf
                        <input id="search-input" type="search" name="search" required>
                        <i class="fa fa-search"></i>
                    </form>
                    <div class="search-pannel" id="value-container">
                        <ul id="search-results">
                        </ul>
                    </div>
                </div>


                <div class="col-4" id="nav">
                    <div class="header-navigation">
                        <div class="dropdown">
                            <a href="#" class="notification" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style="outline: none">
                                <span class="material-symbols-outlined">notifications
                                </span>
                                <span id="badge-notification">1</span>
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <p class="dropdown-item">Hai ricevuto un like al tuo post nome_post</p>
                                </li>
                                <li>
                                    <p class="dropdown-item">L'utente utente_name ha commentato il post nome_post</p>
                                </li>
                                <li>
                                    <p class="dropdown-item">Hai ricevuto l'ivito di un associazione, controlla la tua
                                        mail</p>
                                </li>
                                {{-- <li>
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
                                </li> --}}
                            </ul>
                        </div>
                        <form action="{{ route('thread.new') }}" method="GET">
                            @csrf
                            <a href="{{ route('thread.new') }}"
                                onclick="event.preventDefault(); this.closest('form').submit();"><span
                                    class="material-symbols-outlined">add</span></a>
                        </form>
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
