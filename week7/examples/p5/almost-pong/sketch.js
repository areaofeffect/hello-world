// Almost pong
// A deliberately unfinished pong. Move the mouse to control the paddle.
// Things you could finish:
//   - a second player on the right with their own paddle
//   - a score for each player instead of "lives"
//   - serve the ball from the center after a miss
//   - a start screen and a game over screen (see application state)
//   - keyboard controls instead of the mouse

let canvasWidth = 600;
let canvasHeight = 400;

// the ball: position and velocity
let ballX = 300;
let ballY = 200;
let ballXV = -4;
let ballYV = 2;
let ballSize = 30;

// the paddle
let paddleX = 20;
let paddleY = 20;
let paddleW = 20;
let paddleH = 120;

let lives = 3;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noStroke();
  textSize(32);
}

function draw() {
  background(0);
  setText();
  setShapes();
  bounceCheck();
  increment();
  scoreCheck();
}

function increment() {
  ballX += ballXV;
  ballY += ballYV;

  // every 10 seconds (600 frames at 60fps) the ball speeds up
  if (frameCount % 600 == 0) {
    ballXV = ballXV * 2;
  }
}

function mouseMoved() {
  // the paddle follows the mouse, centered on it
  paddleY = mouseY - paddleH / 2;
}

function setShapes() {
  fill(255);
  rect(paddleX, paddleY, paddleW, paddleH);
  ellipse(ballX, ballY, ballSize, ballSize);
}

function paddleBounce() {
  // is the ball between the top and bottom of the paddle?
  if (ballY > paddleY && ballY < paddleY + paddleH) {
    ballXV = ballXV * -1;
    lives += 1;
  }
}

function wallBounce() {
  ballXV = ballXV * -1;
}

function bounceCheck() {
  // top and bottom walls
  if (ballY < 0 || ballY > height) {
    ballYV = ballYV * -1;
  }

  // reached the paddle, moving left
  if (ballX < paddleX + paddleW + ballSize / 2 && ballXV < 0) {
    paddleBounce();
  }

  // right wall, moving right
  if (ballX > width && ballXV > 0) {
    wallBounce();
  }

  // missed the paddle: lose a life and put the ball back on the right
  if (ballX < 0) {
    ballX = width;
    lives -= 1;
  }
}

function scoreCheck() {
  if (lives == 0) {
    noLoop();
    lives = "YOU LOSE";
  }

  if (lives == 10) {
    noLoop();
    lives = "YOU WIN";
  }
}

function setText() {
  textAlign(CENTER);
  fill(255);
  text(lives, width / 2, 40);
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
