// Simple drawing app
// Drag the mouse to draw. The canvas is never cleared in draw(),
// so every line stays on screen.

let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  strokeWeight(10);
  background(127);
}

function mouseDragged() {
  // draw a line from the previous mouse position (pmouseX, pmouseY)
  // to the current one (mouseX, mouseY)
  stroke(random(255), random(255), random(255));
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  // any key clears the drawing
  background(127);
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
  background(127); // resizing clears the canvas, so repaint it
}
