// Mouse position
// A square follows the mouse and the coordinates are printed in the corner.

let canvasWidth = 600;
let canvasHeight = 400;

let xPos = 0;
let yPos = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER); // draw rectangles from their center
  textSize(16);
}

function draw() {
  background(127);

  // the square sits wherever the mouse was last seen
  fill(0, 0, 255);
  noStroke();
  rect(xPos, yPos, 40, 40);

  // print the coordinates in the corner
  fill(255);
  text("x: " + int(mouseX) + "   y: " + int(mouseY), 12, 24);
}

function mouseMoved() {
  // capture the mouse position into our variables
  xPos = mouseX;
  yPos = mouseY;
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
