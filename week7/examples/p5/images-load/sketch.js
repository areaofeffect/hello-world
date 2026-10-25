// Load an image
// preload() runs before setup() and waits for the image to finish loading.

let canvasWidth = 600;
let canvasHeight = 400;

let img;

function preload() {
  // the path is relative to index.html
  img = loadImage("img/sva.jpg");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(200);

  // draw the image as a square that fills the shorter side of the canvas
  let size = min(width, height);
  image(img, width / 2 - size / 2, height / 2 - size / 2, size, size);
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
