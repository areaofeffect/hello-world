function setup() {
  createCanvas(200, 200);
  strokeWeight(10)
  background(127);
}

function mouseDragged() {
  // drag to draw a line from previouse mouse position
  // to current mouse position
  stroke(random(255),random(255),random(255));
  line(mouseX, mouseY, pmouseX, pmouseY);
}