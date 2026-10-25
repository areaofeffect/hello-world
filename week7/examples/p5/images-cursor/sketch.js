// Image as cursor
// Hide the mouse cursor and draw an image where the mouse is instead.

let canvasWidth = 600;
let canvasHeight = 400;

let img;
let ufo;

function preload() {
  img = loadImage("img/sva.jpg");
  ufo = loadImage("img/ufo.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noCursor(); // hide the real cursor, the ufo replaces it
}

function draw() {
  background(200);

  // the background image
  let size = min(width, height);
  image(img, width / 2 - size / 2, height / 2 - size / 2, size, size);

  // the ufo, centered on the mouse
  image(ufo, mouseX - ufo.width / 2, mouseY - ufo.height / 2);
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
