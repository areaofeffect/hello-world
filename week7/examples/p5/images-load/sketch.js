var img;

function preload() {
  img = loadImage("img/sva.jpg");
}

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(200);
  image(img, 0, 0, 200, 200);
}