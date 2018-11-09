<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="index.css">
    <title>Statera</title>
  </head>
  <body>
    <canvas id="display" width="700" height="700"></canvas>
  </body>
  <script type="text/javascript">
    let Game = {},
    display = document.getElementById("display"),
    displayContext = display.getContext("2d");

    Game.scale = Math.floor(display.width / 35);

    function wait(ms) {
      var d = new Date();
      var d2 = null;
      do { d2 = new Date(); }
      while(d2-d < ms);
    }
  </script>
  <script src="player.js"></script>
  <script src="draw.js"></script>
  <script src="physic.js"></script>
  <script src="game.js"></script>
</html>
