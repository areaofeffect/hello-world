// Rectangular button
// Is the mouse inside the rectangle? Compare mouseX and mouseY
// against the rectangle's left, right, top and bottom edges.

let canvasWidth = 600;
let canvasHeight = 400;

let backgroundColor;
let isOverRectangle = false; // boolean!

// the rectangle: position and size
let rectX;
let rectY;
let rectW = 150;
let rectH = 150;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  backgroundColor = color(127, 127, 127);
}

function draw() {
  background(backgroundColor);

  // keep the rectangle centered, even if the canvas changes size
  rectX = width / 2 - rectW / 2;
  rectY = height / 2 - rectH / 2;

  // check if the mouse is inside the rectangle
  // formula: (mouseX >= x && mouseX <= x + w) && (mouseY >= y && mouseY <= y + h)
  if (mouseX >= rectX && mouseX <= rectX + rectW && mouseY >= rectY && mouseY <= rectY + rectH) {
    isOverRectangle = true;
  } else {
    isOverRectangle = false;
  }

  // draw the rectangle
  stroke(0);
  strokeWeight(5);

  if (isOverRectangle == true) {
    fill(100);
    cursor(HAND); // change the cursor!
  } else {
    fill(200);
    cursor(ARROW);
  }

  rect(rectX, rectY, rectW, rectH);
}

function mousePressed() {
  // we check if we are over the rectangle when the mouse is pressed
  if (isOverRectangle == true) {
    backgroundColor = color(random(255), random(255), random(255));
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
