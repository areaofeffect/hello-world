// /* standard 16x9 resolutions
// 2160p: 3840×2160
// 1440p: 2560×1440
// 1080p: 1920×1080
// 720p: 1280×720
// 480p: 854×480
// 360p: 640×360
// 240p: 426×240
// */

let capture;
function setup() {
  createCanvas(640, 480);
  //  https://p5js.org/examples/dom-video-capture.html
  capture = createCapture(VIDEO);
  capture.hide();
  // https://p5js.org/reference/#/p5/pixelDensity
  pixelDensity(1);
  rectMode(CENTER);
  noStroke();
  // colorMode(HSB);
}

function draw() {
  background(50);
  fill(255);

  // this will flip the video like zoom
  translate(width, 0);
  scale(-1, 1);

  // https://p5js.org/reference/#/p5.Image/loadPixels
  capture.loadPixels();

  let pixelSize = 20;
  for (let captureY = 0; captureY < capture.height; captureY += pixelSize) {
    for (let captureX = 0; captureX < capture.width; captureX += pixelSize) {
      // https://p5js.org/reference/#/p5/pixels
      let offset = (captureY * capture.width + captureX) * 4;
      let xpos = (captureX / capture.width) * width;
      let ypos = (captureY / capture.height) * height;
      let c = color(
        capture.pixels[offset],
        capture.pixels[offset + 1],
        capture.pixels[offset + 2],
        capture.pixels[offset + 3]
      );
      fill(c);
      rect(
        xpos,
        ypos,
        pixelSize, // (pixelSize * capture.pixels[offset] + 0) / 255,
        pixelSize // (pixelSize * capture.pixels[offset] + 1) / 255
      );
    }
  }
  filter(GRAY);
  // filter(BLUR, 3);
  // filter(INVERT);
  // filter(ERODE);
  // filter(DILATE);
  // filter(THRESHOLD, 0.5);
  // filter(POSTERIZE, 2);
}
