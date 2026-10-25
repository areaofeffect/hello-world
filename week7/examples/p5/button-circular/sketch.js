// Circular button
// Is the mouse inside the circle? Measure the distance from the mouse
// to the center. If it is less than the radius, we are inside.

let canvasWidth = 600;
let canvasHeight = 400;

let backgroundColor;
let isOverCircle = false;

let radius = 75;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  backgroundColor = color(255, 255, 255);
}

function draw() {
  background(backgroundColor);

  // the circle sits in the center of the canvas
  let circleX = width / 2;
  let circleY = height / 2;

  // get the distance between the mouse and the center of the circle
  let distance = dist(mouseX, mouseY, circleX, circleY);

  // if the distance is less than the circle's radius, we are inside
  if (distance < radius) {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }

  // draw the circle
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (isOverCircle == true) {
    fill(100);
    cursor(HAND);
  } else {
    fill(200);
    cursor(ARROW);
  }

  ellipse(circleX, circleY, radius * 2, radius * 2);
}

function mousePressed() {
  if (isOverCircle == true) {
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
