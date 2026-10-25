// Keyboard movement with easing
// The arrow keys move a target. The circle eases toward the target
// a little bit every frame, so the movement feels smooth.

let canvasWidth = 600;
let canvasHeight = 400;

// where the circle is
let xpos;
let ypos;

// where the circle wants to be
let targetX;
let targetY;

// how much of the remaining distance to cover each frame (0 to 1)
let easing = 0.05;

// how far one key press moves the target
let numPixels = 40;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // start in the center
  xpos = width / 2;
  ypos = height / 2;
  targetX = xpos;
  targetY = ypos;
}

function draw() {
  background(127);

  handleKeyboardEvents();
  calculateEasing();

  // draw the circle
  fill(255, 0, 0);
  stroke(0);
  ellipseMode(CENTER);
  ellipse(xpos, ypos, 40, 40);
}

function calculateEasing() {
  // move a fraction of the way from the position to the target
  let dx = targetX - xpos;
  xpos += dx * easing;

  let dy = targetY - ypos;
  ypos += dy * easing;
}

function handleKeyboardEvents() {
  // keyIsPressed stays true while the key is held down,
  // so holding an arrow keeps the target moving
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      targetY = ypos - numPixels;
    }

    if (keyCode == DOWN_ARROW) {
      targetY = ypos + numPixels;
    }

    if (keyCode == RIGHT_ARROW) {
      targetX = xpos + numPixels;
    }

    if (keyCode == LEFT_ARROW) {
      targetX = xpos - numPixels;
    }
  }
}

function keyPressed() {
  return false; // stop the arrow keys from scrolling the page
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
