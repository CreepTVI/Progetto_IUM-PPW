<!DOCTYPE html>
    <head>
        <title>Singup</title>
        <meta charset="UTF-8">
        <meta name="author" content="Danilo Ivone">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <header class="standard-header">
        <h1>I Love Pizza</h1>
    </header>
    <body class="standar-body">
        <section>
            <hgroup>
                <h3>Singup</h3>
            </hgroup>
            <form name="dati-utente">
                <fieldset>
                    <legend>Registrati</legend>
                        <p>
                            <label for="email">Email</label><br>
                            <input type="email" name="email" autocomplete="on" placeholder="email@domain.ext" autofocus required>
                        </p>
                        <p>
                            <label for="username">Username</label><br>
                            <input type="username" name="username" autocomplete="on" placeholder="Inserisci il tuo username" required>
                        </p>
                        <p>
                            <label for="nome">Nome</label><br>
                            <input type="nome" name="nome" autocomplete="on" placeholder="Nome dell'utente" required>
                        </p>
                        <p>
                            <label for="cognome">Cognome</label><br>
                            <input type="cognome" name="cognome" autocomplete="on" placeholder="Cognome dell'utente" required>
                        </p>
                        <p>
                            <label for="password">Password</label><br>
                            <input type="password" name="password" autocomplete="off" placeholder="La password deve..." required>
                        </p>
                        <p>
                            <label for="conf-password">Conferma password</label><br>
                            <input type="password" name="conf-password" autocomplete="off" placeholder="Inserisci nuvoamente la password" required>
                        </p>
                        <p>
                            <label for="nome-associazione">* Nome associazione</label><br>
                            <input type="nome-associazione" name="nome-associazione" autocomplete="on" placeholder="Quale associazione rappresenti?">
                        </p>
                        <p>
                            <input type="submit" value="Registrati">
                        </p>
                </fieldset>
            </form>
        </section>
    </body>
    <footer class="standard-footer">
        
    </footer>
</html>