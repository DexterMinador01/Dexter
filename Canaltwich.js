document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("code-form");
    const generatedHTML = document.getElementById("generated-html");
    const copyButton = document.getElementById("copy-button");
    const clearButton = document.getElementById("clear-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const codeInput = document.getElementById("code").value;
        const html = `<!DOCTYPE html>

<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Twitch Player</title>

    <script src="https://player.twitch.tv/js/embed/v1.js"></script>

    <style>

        body {

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            height: 100vh;

            margin: 0;

            text-align: center;

            font-family: Arial, sans-serif;

        }

        #buttons-container {

            display: flex;

            flex-direction: column;

            align-items: center;

            margin-top: 20px;

        }

        button, .back-button {

            background-color: yellow;

            color: red;

            border: 2px solid red;

            border-radius: 5px;

            box-shadow: 2px 2px red;

            padding: 10px 20px;

            text-align: center;

            cursor: pointer;

            margin: 10px;

            font-size: 1rem;

        }

        .back-button, #reload-btn {

            background-color: black;

            color: white;

            border: 2px solid white;

        }

        #twitch-player {

            border: 2px solid black;

            margin: 20px 0;

            width: 100%;

            max-width: 600px;

        }

        img {

            width: 100%;

            max-width: 380px;

        }

        @media (max-width: 600px) {

            button, .back-button {

                width: calc(100% - 40px);

                box-sizing: border-box;

            }

            #twitch-player {

                height: auto;

            }

        }

    </style>

</head>

<body>

    <div>

        <img src="https://dl.dropboxusercontent.com/s/pru51rlnayuytb6/IMG_20220610_205527.png" alt="Imagen descriptiva" />

    </div>

    <div id="twitch-player" aria-label="Twitch Player"></div>

    <div id="buttons-container">

        <button id="fullscreen-btn" aria-label="Pantalla Completa">Pantalla Completa</button>

        <button id="reload-btn" aria-label="Recargar">Recargar</button>

        <a href="https://dexterminador1.blogspot.com/2023/02/tv_2.html" class="back-button" aria-label="Atrás">Atrás</a>

    </div>

    <script>

        var options = {

            width: '100%',

            height: 480,

            channel: "${codeInput}",

            controls: false,

            autoplay: true,

            muted: false,

        };

        var player = new Twitch.Player("twitch-player", options);

        player.setVolume(0.5);

        player.addEventListener(Twitch.Player.READY, function () {

            player.setQuality("chunked");

            player.setMuted(false);

        });

        player.addEventListener(Twitch.Player.PAUSE, function () {

            player.play();

        });

        function checkPlayerState() {

            if (player.getPlayerState() !== Twitch.Player.PLAYING) {

                player.play();

            }

        }

        setInterval(checkPlayerState, 5000); // Verificar cada 5 segundos

        document.getElementById("fullscreen-btn").addEventListener("click", function () {

            var elem = document.getElementById("twitch-player").getElementsByTagName("iframe")[0];

            if (elem.requestFullscreen) {

                elem.requestFullscreen();

            } else if (elem.mozRequestFullScreen) {

                elem.mozRequestFullScreen();

            } else if (elem.webkitRequestFullscreen) {

                elem.webkitRequestFullscreen();

            }

        });

        document.getElementById("reload-btn").addEventListener("click", function () {

            location.reload();

        });

        window.addEventListener('resize', function() {

            var playerDiv = document.getElementById('twitch-player');

            var newWidth = playerDiv.clientWidth;

            player.setWidth(newWidth);

            player.setHeight(newWidth * 0.75);

        });

    </script>

</body>

</html>`;
        generatedHTML.textContent = html;
        copyButton.disabled = false;
        clearButton.disabled = false;
    });

    copyButton.addEventListener("click", function () {
        const htmlToCopy = document.getElementById("generated-html").textContent;
        navigator.clipboard.writeText(htmlToCopy)
            .then(() => alert("HTML copiado al portapapeles"))
            .catch((err) => console.error('Error al copiar HTML: ', err));
    });

    clearButton.addEventListener("click", function () {
        generatedHTML.textContent = "";
        copyButton.disabled = true;
        clearButton.disabled = true;
    });
});