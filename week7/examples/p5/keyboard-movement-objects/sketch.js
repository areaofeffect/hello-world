var player;

function setup() {
  createCanvas(200, 200);

  // create object
  player = new gameObject();
}

function draw() {
  background(127);
  player.update();
}

function keyPressed() {
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

function gameObject() {

  this.x = width / 2;
  this.y = width / 2;

  this.hmom = 0;
  this.vmom = 0;

  this.speed = 10;
  this.size = 25;

  this.update = function() {
    this.move();
    this.render();
  }

  this.move = function() {
    this.x += this.hmom;
    this.y += this.vmom;

    // dampenings
    this.hmom *= 0.9;
    this.vmom *= 0.9;

    this.checkCollisions();
  }

  this.checkCollisions = function() {
    // left and right
    if (this.x <= 0) {
      this.x = 0
    } else if (this.x + this.size >= width) {
      this.x = width - this.size;
    }

    // up and down
    if (this.y <= 0) {
      this.y = 0
    } else if (this.y + this.size >= height) {
      this.y = height - this.size;
    }
  }

  this.render = function() {
    fill(255,0,0);
    rect(this.x, this.y, this.size, this.size);
  }
}