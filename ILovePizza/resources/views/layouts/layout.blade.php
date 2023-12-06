<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Danilo Ivone">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/thread-card.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <header class="header-outer">
        <!--
            Sezione dedicata a contenere:
            -   La search bar
            -   L'icona per aggiungere un nuovo post
            -   L'icona delle notifihe
            -   Il logo del sito   
        -->
        <div class="header-inner responsive-wrapper">
            <div class="container">

                <div class="row">

                    <div class="col">
                        <figure class="header-logo">
                            <img src="" />
                        </figure>
                    </div>

                    <div class="col">
                        <form id="search-bar" action="">
                            <input id="search" type="search" required>
                            <i class="fa fa-search"></i>
                            <a href="javascript:void(0)" id="clear-btn">Clear</a>
                        </form>
                    </div>

                    <div class="col" id="nav">
                        <nav class="header-navigation">            
                            <a href="#"><span class="material-symbols-outlined">notifications</span></a>
                            <a href="#"><span class="material-symbols-outlined">person</span></a>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    </header>

    <body class="standar-body">
         <!--
            Sezione dedicata a contenere le voci del menu di navigazione:
            -   Titolo
            -   Icona/descrizione della Home
            -   Icona/descrizione del Forum
            -   Icona/descrizione del Media
            -   Icona/descrizione dell eventuale associazione a cui un utente è associata
        -->
        <div id="main-container">
            <div class="menu">
                <ul class="menu-content">
                    <li><a href="#"><span class="material-symbols-outlined">home</span><span>Home</span></a></li>
                    <li><a href="#"><span class="material-symbols-outlined">group</span><span>Associazioni</span></a></li>
                    <li><a href="#"><span class="material-symbols-outlined">notifications</span><span>Notifiche</span></a></li>
                </ul>
            </div>

            <div class="section-content">
                <div class="container">
                    <div class="row">
                        
                        <div class="container" id="post-sec">
                            <div class="col">
                                <div class="row">
                                    <p>Percorso dinamico per identificare la navigazione nel sito esempi: Home > community forum</p>
                                    <div class="col">
                                        <div class="blog_post">
                                            <div class="container_copy">
                                                <div class="img_pod">
                                                    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image">
                                                </div>
                                            <h6>12 January 2019</h6>
                                            <h3>CSS Positioning</h3>
                                            <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
                                            <a class="btn_primary" href='#' target="_blank">Read More</a>
                                            </div>
                                      </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col">
                                        <div class="blog_post">
                                            <div class="container_copy">
                                                <div class="img_pod">
                                                    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image">
                                                </div>
                                            <h6>12 January 2019</h6>
                                            <h3>CSS Positioning</h3>
                                            <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
                                            <a class="btn_primary" href='#' target="_blank">Read More</a>
                                            </div>
                                      </div>
                                    </div>
                                </div>
                                    
    
                            </div>
                        </div>
                       

                        <div class="col-3">
                            <section class="info-section">
                                <section>
                                    Membri dell'associazione online
                                </section>
                                <section>
                                    Thread recenti
                                </section>
                            </section>
                        </div>
                    </div>
    
                    <div class="row">
                        <legend>Nome della sezione</legend>
                        Sezione nuovo Post (tipo twitter)
                        @yield('content')
                    </div>  
                </div>
            </div>
        </div>
    </body>
    <footer class="standard-footer">
        
    </footer>
</html>