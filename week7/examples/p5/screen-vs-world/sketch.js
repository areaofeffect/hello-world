// Screen space vs world space
//
// The mouse lives in SCREEN space: mouseX and mouseY count pixels from the
// top left of the canvas. Once you translate() and scale() the canvas to
// make a "camera", the things you draw live in WORLD space, and the two
// stop agreeing as soon as the camera moves. To hit test something in the
// world you have to convert the mouse into world coordinates first.
//
// Drag to pan the camera, scroll to zoom, press R to reset.

let canvasWidth = 600;
let canvasHeight = 400;

// the camera: which world point sits in the center of the screen, and the zoom
let camX;
let camY;
let zoom = 1;

// a button that lives in the world at a fixed world position
let buttonX = 300;
let buttonY = 200;
let buttonRadius = 40;
let clicks = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textFont("monospace");
  resetCamera();
}

function resetCamera() {
  // start with the camera placed so that world and screen line up exactly
  camX = width / 2;
  camY = height / 2;
  zoom = 1;
}

// convert a screen position (like the mouse) into a world position.
// This is the camera transform in draw(), run backwards.
function screenToWorld(sx, sy) {
  let wx = (sx - width / 2) / zoom + camX;
  let wy = (sy - height / 2) / zoom + camY;
  return { x: wx, y: wy };
}

function draw() {
  background(30);

  // where is the mouse in the world?
  let mouseWorld = screenToWorld(mouseX, mouseY);

  // the right way: compare world to world
  let overButton = dist(mouseWorld.x, mouseWorld.y, buttonX, buttonY) < buttonRadius;

  // the wrong way: compare screen to world. It works only while the camera
  // has not moved, which is why it is such an easy mistake to make.
  let overButtonNaive = dist(mouseX, mouseY, buttonX, buttonY) < buttonRadius;

  // ---- the world: everything inside push/pop is moved by the camera
  push();
  translate(width / 2, height / 2); // the screen center...
  scale(zoom);                      // ...zoomed...
  translate(-camX, -camY);          // ...is looking at the world point camX, camY

  drawGrid();
  drawAxes(color(80, 220, 120), "world (0,0)", 1 / zoom, 1);

  // the button, drawn in world coordinates
  stroke(255);
  strokeWeight(2 / zoom);
  if (overButton) {
    fill(80, 220, 120);
  } else {
    fill(200);
  }
  ellipse(buttonX, buttonY, buttonRadius * 2, buttonRadius * 2);

  noStroke();
  fill(30);
  textAlign(CENTER, CENTER);
  textSize(12 / zoom);
  text("clicks: " + clicks, buttonX, buttonY);

  // the mouse, drawn in world coordinates: it lands exactly under the cursor,
  // which proves the conversion is right
  fill(255, 80, 80);
  ellipse(mouseWorld.x, mouseWorld.y, 8 / zoom, 8 / zoom);

  pop();

  // ---- the screen: nothing below here is moved by the camera
  drawAxes(color(255, 80, 80), "screen (0,0)", 1, 0);

  // ghost: where the naive hit test thinks the button is
  noFill();
  stroke(255, 80, 80);
  strokeWeight(1);
  drawingContext.setLineDash([6, 6]);
  ellipse(buttonX, buttonY, buttonRadius * 2, buttonRadius * 2);
  drawingContext.setLineDash([]);

  noStroke();
  fill(255, 80, 80);
  textAlign(LEFT, TOP);
  textSize(11);
  text("where mouseX, mouseY\nthink the button is", buttonX + buttonRadius + 8, buttonY - 12);

  drawReadout(mouseWorld, overButton, overButtonNaive);
}

// a grid in world units, so you can see the camera move
function drawGrid() {
  stroke(60);
  strokeWeight(1 / zoom);
  for (let x = -400; x <= 1000; x += 50) {
    line(x, -400, x, 800);
  }
  for (let y = -400; y <= 800; y += 50) {
    line(-400, y, 1000, y);
  }
}

// two arrows from (0,0) along +x and +y, in whatever space we are in.
// labelRow moves the label down so the two origins can be read when they overlap.
function drawAxes(c, label, s, labelRow) {
  stroke(c);
  strokeWeight(3 * s);
  line(0, 0, 70 * s, 0);
  line(0, 0, 0, 70 * s);
  noStroke();
  fill(c);
  textAlign(LEFT, TOP);
  textSize(12 * s);
  text(label, 10 * s, (8 + 16 * labelRow) * s);
  text("+x", 74 * s, -6 * s);
  text("+y", -6 * s, 74 * s);
}

// a whole number padded with spaces so the columns line up
function pad(value) {
  return String(round(value)).padStart(5);
}

// the numbers, drawn in screen space
function drawReadout(mouseWorld, overButton, overButtonNaive) {
  noStroke();
  fill(0, 0, 0, 170);
  rect(width - 290, 10, 280, 130, 6);

  textAlign(LEFT, TOP);
  textSize(12);

  fill(255, 80, 80);
  text("screen  mouseX, mouseY " + pad(mouseX) + "," + pad(mouseY), width - 280, 20);

  fill(80, 220, 120);
  text("world   x, y           " + pad(mouseWorld.x) + "," + pad(mouseWorld.y), width - 280, 38);

  fill(200);
  text("camera                 " + pad(camX) + "," + pad(camY), width - 280, 56);
  text("zoom                   " + nf(zoom, 1, 2), width - 280, 74);

  text("over button?  world: " + (overButton ? "YES" : "no") + "   screen: " + (overButtonNaive ? "YES" : "no"), width - 280, 98);

  fill(150);
  text("drag: pan   scroll: zoom   R: reset", width - 280, 120);
}

function mousePressed() {
  // click the button using the converted (world) mouse position
  let mouseWorld = screenToWorld(mouseX, mouseY);
  if (dist(mouseWorld.x, mouseWorld.y, buttonX, buttonY) < buttonRadius) {
    clicks += 1;
  }
}

function mouseDragged() {
  // pan: move the camera the opposite way the mouse moved,
  // divided by zoom so the world sticks to the cursor
  camX -= movedX / zoom;
  camY -= movedY / zoom;
}

function mouseWheel(event) {
  // zoom in or out around the center of the screen
  if (event.delta > 0) {
    zoom *= 0.9;
  } else {
    zoom *= 1.1;
  }
  zoom = constrain(zoom, 0.25, 4);
  return false; // stop the page from scrolling
}

function keyPressed() {
  if (key == "r" || key == "R") {
    resetCamera();
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
  resetCamera(); // the camera center depends on the canvas size
}
