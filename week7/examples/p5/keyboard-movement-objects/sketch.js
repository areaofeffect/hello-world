// Keyboard movement with a game object
// The player is a class (see week 6) that knows how to move itself,
// stay inside the canvas, and draw itself.

let canvasWidth = 600;
let canvasHeight = 400;

let player;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

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

  return false; // stop the arrow keys from scrolling the page
}

class GameObject {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.hmom = 0; // horizontal momentum
    this.vmom = 0; // vertical momentum

    this.speed = 12;
    this.size = 40;
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
    stroke(0);
    rect(this.x, this.y, this.size, this.size);
  }
}

// --- canvas size and fullscreen ---
// The Fullscreen button in index.html asks the browser to go fullscreen.
// Whenever the window changes size, fit the canvas to it, and go back
// to the normal size when fullscreen ends.
function windowResized() {
  if (document.fullscreenElement) {
    resizeCanvas(windowWidth, windowHeight);
  } else {
    resizeCanvas(canvasWidth, canvasHeight);
  }
}
