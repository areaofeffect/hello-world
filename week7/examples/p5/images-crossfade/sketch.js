var img;
var img2;

function preload() {
  img = loadImage("static/img/sva.jpg");
  img2 = loadImage("static/img/cat.jpg");
}

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(200);
  // background image
  image(img2, 0, 0, 200, 200);

  // second image
  var alpha = map(mouseX, 0, width, 0, 255);
  tint(255, alpha);
  image(img, 0, 0, 200, 200);
}