// Simple drawing app
// Drag the mouse to draw. The canvas is never cleared in draw(),
// so every line stays on screen.
// On a phone, dragging a finger works the same way: p5 treats a
// finger like the mouse and calls mouseDragged() as it moves.

let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  // a phone screen can be narrower than 600, so never make the
  // canvas wider than the window
  createCanvas(min(canvasWidth, windowWidth), canvasHeight);
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
  clearDrawing();
}

// paint over everything with the background color.
// The Clear button in index.html calls this too.
function clearDrawing() {
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
    resizeCanvas(min(canvasWidth, windowWidth), canvasHeight);
  }
  background(127); // resizing clears the canvas, so repaint it
}
