function setup() {
  createCanvas(200, 200);
  background(127);
  rectMode(CENTER);
}

function draw() {
  background(127)

  translate(width/2, height/2); // translation to center

  // map the mouse X position to radians
  var mappedValueX = map(mouseX, 0, 200, 0, 2*PI);
  
  // map the mouse Y position to scale
  var mappedValueY = map(mouseY, 0, 200, 0, 5);

  // scale the sketch based on mouse position
  scale(mappedValueY);

  // rotate the sketch based on the mouse position
  rotate(mappedValueX);

  // draw the rectangle
  fill(255,255,0);
  rect(0, 0, 50, 50);
}