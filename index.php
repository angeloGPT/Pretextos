<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Gerador de Pretextos</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main>

        <h1>Gerador de Pretextos</h1>

        <p>
            Digite um assunto e descubra uma desculpa completamente absurda.
        </p>

        <input
            type="text"
            id="assunto"
            placeholder="Digite um assunto..."
        >

        <button id="btnGerar">Gerar</button>

        <div id="resultado">

            <div class="parte">

                <h3>Causa</h3>

                <p id="causa">
                    A causa aparecerá aqui.
                </p>

                <button class="btnNovamente" data-parte="causa">
                    Gerar novamente
                </button>

            </div>

            <div class="parte">

                <h3>Consequência</h3>

                <p id="consequencia">
                    A consequência aparecerá aqui.
                </p>

                <button class="btnNovamente" data-parte="consequencia">
                    Gerar novamente
                </button>

            </div>

            <div class="parte">

                <h3>Solução</h3>

                <p id="solucao">
                    A solução aparecerá aqui.
                </p>

                <button class="btnNovamente" data-parte="solucao">
                    Gerar novamente
                </button>

            </div>

            <div class="pretextoCompleto">

                <h2>Pretexto Completo</h2>

                <p id="pretexto">
                    O pretexto completo aparecerá aqui.
                </p>

            </div>

        </div>

    </main>

    <script src="script.js"></script>

</body>
</html>