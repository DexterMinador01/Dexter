// JavaScript para el reproductor de Twitch y el botÃ³n "Pantalla Completa"
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    width: 380,
    height: 480,
    channel: "cc_x24ff",
    controls: true,
    autoplay: true, // Activar el autoplay
  };

  var player = new Twitch.Player("twitch-player", options);
  player.setVolume(0.5);

  var fullscreenBtn = document.getElementById("fullscreen-btn");
  fullscreenBtn.addEventListener("click", function () {
    var elem = document.getElementById("twitch-player").getElementsByTagName("iframe")[0];
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  });
  
// Activar pantalla completa automáticamente al cargar
  player.addEventListener(Twitch.Player.READY, function () {
    player.setFullscreen(true);
  });
});