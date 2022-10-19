var img;
var ufo;

function preload() {
  img = loadImage("img/sva.jpg");
  ufo = loadImage("img/ufo.png");

}

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(200);
  image(img, 0, 0, 200, 200);
  image(ufo, mouseX - ufo.width/2, mouseY - ufo.height/2);
}