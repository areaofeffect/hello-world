// Keyboard movement with a game object
// The player is a class (see week 6) that knows how to move itself,
// stay inside the canvas, and draw itself.

let player;

function setup() {
  createCanvas(200, 200);

  // create the player object
  player = new GameObject();
}

function draw() {
  background(127);
  player.update();
}

function keyPressed() {
  // arrow keys add momentum instead of moving the player directly,
  // so the movement eases out instead of stopping dead
  if (keyCode === LEFT_ARROW) {
    player.hmom -= player.speed;
  } else if (keyCode === RIGHT_ARROW) {
    player.hmom += player.speed;
  } else if (keyCode === UP_ARROW) {
    player.vmom -= player.speed;
  } else if (keyCode === DOWN_ARROW) {
    player.vmom += player.speed;
  }

  return false; // prevent any default behaviour
  // like the page scrolling when you press the arrows
}

class GameObject {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.hmom = 0; // horizontal momentum
    this.vmom = 0; // vertical momentum

    this.speed = 10;
    this.size = 25;
  }

  update() {
    this.move();
    this.render();
  }

  move() {
    this.x += this.hmom;
    this.y += this.vmom;

    // dampening: lose 10% of the momentum every frame
    this.hmom *= 0.9;
    this.vmom *= 0.9;

    this.checkCollisions();
  }

  checkCollisions() {
    // left and right walls
    if (this.x <= 0) {
      this.x = 0;
    } else if (this.x + this.size >= width) {
      this.x = width - this.size;
    }

    // top and bottom walls
    if (this.y <= 0) {
      this.y = 0;
    } else if (this.y + this.size >= height) {
      this.y = height - this.size;
    }
  }

  render() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
  }
}
