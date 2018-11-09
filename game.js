Game.tick = 0;

Game.run = function() {
  Game.tick++;
  Game.draw();
  Game.physic();
}

setInterval("Game.run()", 30)
