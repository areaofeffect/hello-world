// Touch button
// A big round button you press with your finger (or the mouse).
// p5 treats a finger like the mouse: touching the screen moves mouseX
// and mouseY to your finger and calls mousePressed(), and lifting the
// finger calls mouseReleased(). So the same code works on a phone and
// on a laptop.

let canvasWidth = 600;
let canvasHeight = 400;

let radius = 90;

let isPressed = false; // is a finger (or the mouse) holding the button down?
let pressCount = 0; // how many times the button has been pressed
let buttonColor;

function setup() {
  // a phone screen can be narrower than 600, so never make the
  // canvas wider than the window
  createCanvas(min(canvasWidth, windowWidth), canvasHeight);
  buttonColor = color(249, 38, 114);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(54, 55, 49); // a little lighter than the page, so you can see the edges

  // the button sits in the center of the canvas
  let buttonX = width / 2;
  let buttonY = height / 2;

  // while it is held down, draw the button a little smaller,
  // so it looks pushed in
  let size = radius * 2;
  if (isPressed == true) {
    size = radius * 2 * 0.9;
  }

  noStroke();
  fill(buttonColor);
  ellipse(buttonX, buttonY, size, size);

  // the number of presses, in the middle of the button
  fill(255);
  textSize(48);
  text(pressCount, buttonX, buttonY);

  // touches is a list of every finger on the screen right now.
  // Try putting two or three fingers down. (Always 0 with a mouse.)
  fill(154, 155, 148);
  textSize(16);
  text("fingers on the screen: " + touches.length, width / 2, height - 30);
}

function mousePressed() {
  // is the finger inside the circle? Same test as the circular button:
  // the distance to the center is less than the radius
  let distance = dist(mouseX, mouseY, width / 2, height / 2);
  if (distance < radius) {
    isPressed = true;
    pressCount = pressCount + 1;
    buttonColor = color(random(255), random(255), random(255));
  }
}

function mouseReleased() {
  isPressed = false;
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
}
