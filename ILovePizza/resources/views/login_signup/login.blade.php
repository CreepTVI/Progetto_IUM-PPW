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
            <form action="#">
                <h1>Create Account</h1>

                <span>or use your email for registration</span>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Cognome" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Conferma password" required />
                <input type="text" placeholder="Associazione" />
                <button>Sign Up</button>
            </form>
        </div>

        <!-- Form per l'accesso -->
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>

                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <!-- Welcome  -->
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    <footer>
    </footer>
</body>

</html>
