// Custom Pixel Display using Classes
// Advanced version with HSB color mapping and image replacement

// ColorPixel class - represents a single pixel with color analysis
class ColorPixel {
  constructor(gridX, gridY, pixelSize) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.pixelSize = pixelSize;
    this.hsbValue = 0;
    this.brightness = 0;

    // Screen position
    this.x = 0;
    this.y = 0;
  }

  // Update from video capture at this pixel's grid position
  updateFromCapture(capture, appWidth, appHeight) {
    // Calculate position in capture
    let captureX = floor((this.gridX / cols) * capture.width);
    let captureY = floor((this.gridY / rows) * capture.height);

    // Calculate screen position
    this.x = (this.gridX / cols) * appWidth;
    this.y = (this.gridY / rows) * appHeight;

    // Get pixel offset
    let offset = (captureY * capture.width + captureX) * 4;

    // Get RGB values
    let r = capture.pixels[offset];
    let g = capture.pixels[offset + 1];
    let b = capture.pixels[offset + 2];

    // Calculate brightness and HSB value
    this.brightness = (r + g + b) / 3;
    this.hsbValue = map(this.brightness, 0, 255, 0, 360);
  }

  // Display as colored image based on HSB value
  displayAsImage() {
    // Map hue (0-360) to color images
    // Based on the HSB color wheel
    if (this.hsbValue >= 0 && this.hsbValue < 45) {
      image(red, this.x, this.y);
    } else if (this.hsbValue >= 45 && this.hsbValue < 90) {
      image(orange, this.x, this.y);
    } else if (this.hsbValue >= 90 && this.hsbValue < 135) {
      image(yellow, this.x, this.y);
    } else if (this.hsbValue >= 135 && this.hsbValue < 180) {
      image(green, this.x, this.y);
    } else if (this.hsbValue >= 180 && this.hsbValue < 225) {
      image(cyan, this.x, this.y);
    } else if (this.hsbValue >= 225 && this.hsbValue < 270) {
      image(blue, this.x, this.y);
    } else if (this.hsbValue >= 270 && this.hsbValue < 315) {
      image(pink, this.x, this.y);
    } else {
      image(purple, this.x, this.y);
    }
  }

  // Display as greyscale rectangle
  displayAsGreyscale() {
    fill(this.brightness);
    rect(this.x, this.y, this.pixelSize, this.pixelSize);
  }

  // Display as rainbow colored rectangle
  displayAsRainbow() {
    push();
    colorMode(HSB);
    let hsbColor = color(this.hsbValue, 100, 100);
    fill(hsbColor);
    rect(this.x, this.y, this.pixelSize, this.pixelSize);
    pop();
  }
}

// Global variables
let capture;
let pixelGrid = [];
let red, green, blue, yellow, purple, orange, pink, cyan;

// Video and app dimensions
let scaleValue = 20;
let videoWidth = 1920;
let videoHeight = 1080;
let appWidth = 1280;
let appHeight = 720;

// Grid settings
let cols, rows;
let gridSize = 2;
let pixelSize = 25;

function preload() {
  // Load color images
  red = loadImage("images/red.png");
  green = loadImage("images/green.png");
  blue = loadImage("images/blue.png");
  yellow = loadImage("images/yellow.png");
  purple = loadImage("images/purple.png");
  orange = loadImage("images/orange.png");
  pink = loadImage("images/pink.png");
  cyan = loadImage("images/cyan.png");
}

function setup() {
  createCanvas(appWidth, appHeight);

  // Setup video capture
  capture = createCapture(VIDEO);
  capture.size(videoWidth / scaleValue, videoHeight / scaleValue);
  capture.hide();

  // Performance optimization
  pixelDensity(1);
  rectMode(CENTER);
  noStroke();

  // Resize all images
  red.resize(pixelSize, pixelSize);
  green.resize(pixelSize, pixelSize);
  blue.resize(pixelSize, pixelSize);
  yellow.resize(pixelSize, pixelSize);
  purple.resize(pixelSize, pixelSize);
  orange.resize(pixelSize, pixelSize);
  pink.resize(pixelSize, pixelSize);
  cyan.resize(pixelSize, pixelSize);

  // Calculate grid dimensions
  cols = floor(capture.width / gridSize);
  rows = floor(capture.height / gridSize);

  // Create grid of ColorPixel objects using nested loops
  for (let y = 0; y < rows; y++) {
    pixelGrid[y] = [];
    for (let x = 0; x < cols; x++) {
      pixelGrid[y][x] = new ColorPixel(x, y, pixelSize);
    }
  }
}

function draw() {
  background(255);

  // Flip video horizontally (like Zoom)
  translate(width, 0);
  scale(-1, 1);

  // Load pixel data from video
  capture.loadPixels();

  // Update and display each pixel using nested loops
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      pixelGrid[y][x].updateFromCapture(capture, appWidth, appHeight);

      // Choose display mode:
      // pixelGrid[y][x].displayAsImage();
      // pixelGrid[y][x].displayAsGreyscale();
      pixelGrid[y][x].displayAsRainbow();
    }
  }
}
