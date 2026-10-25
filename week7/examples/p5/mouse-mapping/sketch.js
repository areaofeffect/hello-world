// Mouse mapping
// Instead of copying the mouse position, map() it to something else:
// the x position becomes a rotation and the y position becomes a scale.

let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(127);

  translate(width / 2, height / 2); // move the origin to the center

  // map the mouse X position (0 to width) to an angle (0 to TWO_PI radians)
  let angle = map(mouseX, 0, width, 0, TWO_PI);

  // map the mouse Y position (0 to height) to a scale (0.2 to 5)
  let size = map(mouseY, 0, height, 0.2, 5);

  scale(size);   // scale the sketch based on the mouse position
  rotate(angle); // rotate the sketch based on the mouse position

  // draw the rectangle
  fill(255, 255, 0);
  noStroke();
  rect(0, 0, 60, 60);
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
