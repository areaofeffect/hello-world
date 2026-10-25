var img;
var img2;

function preload() {
  img = loadImage("img/sva.jpg");
  img2 = loadImage("img/cat.jpg");
}

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(200);

  // tint() sticks around between frames, so clear it
  // before drawing the background image at full opacity
  noTint();
  image(img2, 0, 0, 200, 200);

  // second image
  var alpha = map(mouseX, 0, width, 0, 255);
  tint(255, alpha);
  image(img, 0, 0, 200, 200);
}