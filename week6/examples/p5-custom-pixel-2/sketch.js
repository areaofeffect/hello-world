// /* standard 16x9 resolutions
// 2160p: 3840×2160
// 1440p: 2560×1440
// 1080p: 1920×1080
// 720p: 1280×720
// 480p: 854×480
// 360p: 640×360
// 240p: 426×240
// */
let red, green, blue, yellow, purple, orange, pink, cyan;
function preload() {
  red = loadImage("images/red.png");
  green = loadImage("images/green.png");
  blue = loadImage("images/blue.png");
  yellow = loadImage("images/yellow.png");
  purple = loadImage("images/purple.png");
  orange = loadImage("images/orange.png");
  pink = loadImage("images/pink.png");
  cyan = loadImage("images/cyan.png");
}

// these values based on camera input that is 1920x1080, adjust for your camera
let capture;
let scaleValue = 20;
let videoWidth = 1920;
let videoHeight = 1080;
let appWidth = 1280;
let appHeight = 720;

function setup() {
  createCanvas(appWidth, appHeight);
  //  https://p5js.org/examples/dom-video-capture.html
  capture = createCapture(VIDEO);
  capture.size(videoWidth / scaleValue, videoHeight / scaleValue);
  // capture.hide();
  // https://p5js.org/reference/#/p5/pixelDensity
  pixelDensity(1);
  rectMode(CENTER);
  noStroke();
}

function drawRetangles(color, xpos, ypos, pixelSize) {
  fill(color);
  rect(
    xpos,
    ypos,
    pixelSize, // (pixelSize * capture.pixels[offset] + 0) / 255,
    pixelSize // (pixelSize * capture.pixels[offset] + 1) / 255
  );
}

function drawImages(color, xpos, ypos) {
  // pick a color based on the hsb wheel: http://www.rags-int-inc.com/phototechstuff/acrcalibration/RGB2HSB.html
  for (j = 0; j < 8; j++) {
    if (color > j * 45 && color < (j + 1) * 45) {
      switch (j) {
        case 0:
          image(red, xpos, ypos);
          break;
        case 1:
          image(orange, xpos, ypos);
          break;
        case 2:
          image(yellow, xpos, ypos);
          break;
        case 3:
          image(green, xpos, ypos);
          break;
        case 4:
          image(cyan, xpos, ypos);
          break;
        case 5:
          image(blue, xpos, ypos);
          break;
        case 6:
          image(pink, xpos, ypos);
          break;
        case 7:
          image(purple, xpos, ypos);
          break;
      }
    }
  }
}

function draw() {
  background(255);
  fill(255);

  // this will flip the video like zoom
  translate(width, 0);
  scale(-1, 1);

  // https://p5js.org/reference/#/p5.Image/loadPixels
  //https:www.youtube.com/watch?v=nMUMZ5YRxHI
  capture.loadPixels();

  let pixelSize = 25;
  red.resize(pixelSize, pixelSize);
  green.resize(pixelSize, pixelSize);
  blue.resize(pixelSize, pixelSize);
  yellow.resize(pixelSize, pixelSize);
  purple.resize(pixelSize, pixelSize);
  orange.resize(pixelSize, pixelSize);
  pink.resize(pixelSize, pixelSize);
  cyan.resize(pixelSize, pixelSize);

  // grid make grid size big or small
  // let gridSize = 1;
  let gridSize = 2;
  for (let captureY = 0; captureY < capture.height; captureY += gridSize) {
    for (let captureX = 0; captureX < capture.width; captureX += gridSize) {
      // https://p5js.org/reference/#/p5/pixels
      let offset = (captureY * capture.width + captureX) * 4;
      let xpos = (captureX / capture.width) * appWidth;
      let ypos = (captureY / capture.height) * appHeight;

      // greyscale by averaging the rgb values
      let r = capture.pixels[offset];
      let g = capture.pixels[offset + 1];
      let b = capture.pixels[offset + 2];
      let a = capture.pixels[offset + 3];

      let brightness = (r + g + b) / 3;
      let hsbValue = map(brightness, 0, 255, 0, 360);

      // uncomment line 128 to draw greyscale
      // drawRetangles(brightness, xpos, ypos, pixelSize);

      // uncomment line 132 tp 138 to draw color
      //draw rectangles that are rainbox
      push();
      // hue, saturation, brightness
      // reduce saturation for pastel colors
      colorMode(HSB);
      let hsbColor = color(hsbValue, 100, 100);
      drawRetangles(hsbColor, xpos, ypos, pixelSize);
      pop();

      // draw images based on the rainbow
      // drawImages(hsbValue, xpos, ypos, pixelSize * 2);
    }
  }
}
