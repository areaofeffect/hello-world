// Click and drag an object
// Based on an example by Daniel Shiffman <http://www.shiffman.net>

let canvasWidth = 600;
let canvasHeight = 400;

let dragging = false; // is the object being dragged?
let rollover = false; // is the mouse over the rectangle?

let x, y, w, h;       // location and size
let offsetX, offsetY; // where inside the rectangle did we click?

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // starting location
  x = 100;
  y = 100;

  // dimensions
  w = 150;
  h = 100;
}

function draw() {
  background(127);

  // is the mouse over the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // move the rectangle while it is being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);

  // different fill depending on the state
  if (dragging) {
    fill(50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }

  rect(x, y, w, h);
}

function mousePressed() {
  // did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // remember where inside the rectangle we clicked,
    // so it does not jump to the mouse position
    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
}

function mouseReleased() {
  // quit dragging
  dragging = false;
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
