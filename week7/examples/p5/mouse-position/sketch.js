var xPos;
var yPos;

function setup() {
  createCanvas(200, 200); // create a window for our sketch
  rectMode(CENTER); // draw rectangles from the center
}

function draw() {
  background(127);
  fill(0,0,255);
  rect(xPos, yPos, 25, 25);
  text("x: " + int(mouseX) + " y: " + int(mouseY), 0, 10);
}

function mouseMoved() {
  // capture the mouse positions into our variables
  xPos = mouseX;
  yPos = mouseY;
}