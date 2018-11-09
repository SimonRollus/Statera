Game.draw = function() {

  displayContext.clearRect(0, 0, display.width, display.height);

  displayContext.fillStyle = Game.player.sprite;
  displayContext.fillRect(Game.player.x, Game.player.y, Game.scale, Game.scale);
};
