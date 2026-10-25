// Keyboard movement
// The arrow keys move a circle a fixed number of pixels per press.

let canvasWidth = 600;
let canvasHeight = 400;

// position of the circle
let xpos;
let ypos;

// how far one key press moves the circle
let numPixels = 20;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // start in the center
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  // clear the background
  background(127);

  // draw the circle
  fill(255, 0, 0);
  stroke(0);
  ellipseMode(CENTER);
  ellipse(xpos, ypos, 40, 40);
}

function keyPressed() {
  // UP key
  if (keyCode == UP_ARROW) {
    ypos = ypos - numPixels;
  }

  // DOWN key
  if (keyCode == DOWN_ARROW) {
    ypos = ypos + numPixels;
  }

  // RIGHT key
  if (keyCode == RIGHT_ARROW) {
    xpos = xpos + numPixels;
  }

  // LEFT key
  if (keyCode == LEFT_ARROW) {
    xpos = xpos - numPixels;
  }

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
