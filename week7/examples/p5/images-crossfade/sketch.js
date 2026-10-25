// Crossfade two images
// The mouse X position controls how much of the top image shows.

let canvasWidth = 600;
let canvasHeight = 400;

let img;
let img2;

function preload() {
  img = loadImage("img/sva.jpg");
  img2 = loadImage("img/cat.jpg");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(200);

  // both images are drawn as a square filling the shorter side
  let size = min(width, height);
  let x = width / 2 - size / 2;
  let y = height / 2 - size / 2;

  // background image
  // tint() sticks around between frames, so clear it first
  noTint();
  image(img2, x, y, size, size);

  // second image, with an alpha mapped from the mouse position:
  // mouse at the left = invisible, mouse at the right = solid
  let alpha = map(mouseX, 0, width, 0, 255);
  tint(255, alpha);
  image(img, x, y, size, size);
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
