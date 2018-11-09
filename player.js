class Player {
  constructor(sprite, x, y, life, speed, leapHeight, inventory, currentWeapon) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.life = life;
    this.speed = speed;
    this.canJump = true;
    this.leapHeight = leapHeight;
    this.inventory = inventory;
    this.currentWeapon = currentWeapon;
  }

  move(moveX) {
    if (this.x + moveX > 0 && this.x + moveX < display.width - Game.scale) {
        this.x += moveX * this.speed;
    }
  }

  jump() {
    if (this.canJump) {
      if (this.y > 0) {
          //this.canJump = false;
          this.y -= this.leapHeight * 5;
          wait(1000);
          this.fall();
        }
    }
  }

  fall() {
    if (this.y < display.height - Game.scale) {
      this.y += Game.scale;
    }
  }
}

Game.player = new Player("blue", 0, display.height - Game.scale, 10, Game.scale, Game.scale, [], null);

document.addEventListener("keydown", function(e) {
  switch(e.keyCode) {
    case 81:
      Game.player.move(-1, 0);
    break;
    case 32:
      Game.player.jump();
    break;
    case 68:
      Game.player.move(1, 0);
    break;
  }
})
