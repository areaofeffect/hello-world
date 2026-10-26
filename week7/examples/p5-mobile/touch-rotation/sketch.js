// Tilt to roll
// Tilt your phone and a ball rolls around, like a marble on a tray.
//
// Phones have a motion sensor that tells the browser how they are
// tilted. p5 keeps the numbers in three variables:
//   rotationX: tilting forward and back (top edge up or down)
//   rotationY: tilting left and right
//   rotationZ: turning while lying flat, like a compass
// Lying flat, screen up, rotationX and rotationY are both close to 0.
//
// Two catches:
// 1. Browsers only share the sensor with https:// pages (or localhost).
// 2. iPhones ask the user first, and only after they tap a button.
//    That is the "Enable tilt" button below the canvas. (Some other
//    browsers show it too. There it just says yes without asking.)
// A laptop has no tilt sensor, so there the mouse pretends to be the tilt.

let canvasWidth = 600;
let canvasHeight = 400;

// the ball
let x;
let y;
let speedX = 0;
let speedY = 0;
let ballSize = 40;

let tiltWorks = false; // becomes true once the sensor sends a reading
let enableButton;
let askedForTilt = false; // has the Enable tilt button been tapped?

function setup() {
  // a phone screen can be narrower than 600, so never make the
  // canvas wider than the window
  createCanvas(min(canvasWidth, windowWidth), canvasHeight);

  // give rotationX, Y and Z in degrees (-180 to 180) instead of radians
  angleMode(DEGREES);

  x = width / 2;
  y = height / 2;

  // If the browser has requestPermission, make a button that asks.
  // Browsers without it send tilt without asking.
  // (On an http:// page there is nothing to ask for, so no button.)
  if (window.isSecureContext == true &&
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function") {
    enableButton = createButton("Enable tilt");
    enableButton.mouseClicked(askForTilt);
  }
}

function askForTilt() {
  DeviceOrientationEvent.requestPermission();
  askedForTilt = true;
  enableButton.hide();
}

// The browser sends a "deviceorientation" event every time the sensor
// has a new reading. (p5 listens for it too, to fill in rotationX, Y, Z.)
// A laptop sends none, or one with empty (null) numbers.
// So the first real reading tells us the sensor works.
window.addEventListener("deviceorientation", function (event) {
  if (event.beta != null) {
    tiltWorks = true;
    if (enableButton != undefined) {
      enableButton.hide();
    }
  }
});

function draw() {
  background(54, 55, 49); // a little lighter than the page, so you can see the edges

  // how far the "tray" is tilted, in degrees
  let tiltX;
  let tiltY;
  if (tiltWorks == true) {
    tiltX = rotationY; // tilt left/right rolls the ball left/right
    tiltY = rotationX; // tilt forward/back rolls it up/down
  } else {
    // no sensor: the mouse pretends to be the tilt.
    // Mouse in the middle of the canvas = lying flat.
    tiltX = map(mouseX, 0, width, -30, 30);
    tiltY = map(mouseY, 0, height, -30, 30);
  }

  // the more you tilt, the more the ball speeds up
  speedX = speedX + tiltX * 0.01;
  speedY = speedY + tiltY * 0.01;

  // friction: lose a little speed every frame so it doesn't roll forever
  speedX = speedX * 0.97;
  speedY = speedY * 0.97;

  x = x + speedX;
  y = y + speedY;

  // bounce off the edges, losing half the speed
  let r = ballSize / 2;
  if (x < r) {
    x = r;
    speedX = -speedX * 0.5;
  }
  if (x > width - r) {
    x = width - r;
    speedX = -speedX * 0.5;
  }
  if (y < r) {
    y = r;
    speedY = -speedY * 0.5;
  }
  if (y > height - r) {
    y = height - r;
    speedY = -speedY * 0.5;
  }

  // draw the ball
  noStroke();
  fill(249, 38, 114);
  ellipse(x, y, ballSize, ballSize);

  // the numbers, top left. round() so they don't flicker with decimals
  fill(154, 155, 148);
  textSize(14);
  if (tiltWorks == true) {
    text("rotationX: " + round(rotationX), 12, 24);
    text("rotationY: " + round(rotationY), 12, 44);
    text("rotationZ: " + round(rotationZ), 12, 64);
  } else if (window.isSecureContext == false) {
    text("Tilt needs an https:// page. Using the mouse instead.", 12, 24);
  } else if (enableButton != undefined && askedForTilt == false) {
    text("On a phone, tap Enable tilt below.", 12, 24);
    text("On a laptop, the mouse tilts the ball.", 12, 44);
  } else {
    text("No tilt sensor. Using the mouse instead.", 12, 24);
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
    resizeCanvas(min(canvasWidth, windowWidth), canvasHeight);
  }
}
