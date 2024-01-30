<!DOCTYPE html>

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="author" content="Danilo Ivone">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/login.css">
    <script src="{{ asset('/js/login.js') }}"></script>
</head>

<header class="standard-header">
    <h1>I Love Pizza</h1>
</header>

<body class="standar-body">
    <div class="container" id="container">
        <div class="form-container sign-up-container">

            <!-- Form per la registrazione -->
            <form action="/test" method="POST">
                {{ csrf_field() }}
                <h1>Crea Account</h1>

                <span>o usa la tua mail per registrarti</span>
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="name" placeholder="Nome" required />
                <input type="text" name="surname" placeholder="Cognome" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="confPassword" placeholder="Conferma password" required />
                <input type="text" name="association" placeholder="Associazione" />
                <button type="submit">Sign Up</button>
            </form>
        </div>

        <!-- Form per l'accesso -->
        <div class="form-container sign-in-container">
            <form action="/login" method="POST">
                {{ csrf_field() }}
                <h1>Sign in</h1>

                <span>o usa il tuo account</span>
                <input name="email" type="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
                <a href="#">Password dimenticata?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
        <!-- Welcome  -->
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Bentornato!</h1>
                    <p>Per tenerti connesso con noi accedi con le tue credenziali</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Inserisci i tuoi dati personali e inizia il tuo percorso con noi!</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    <footer>
    </footer>
</body>

</html>
