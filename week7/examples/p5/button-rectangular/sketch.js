var backgroundColor;
var isOverRectangle; // boolean!
 
function setup() {
  // set canvas size
  createCanvas(200, 200);
  backgroundColor = color(127, 127, 127);
}
 
function draw() {
  background(backgroundColor);
 
  // check if mouse is inside the rectangle
  // formula: (mouseX >= x && mouseX <= x+width) && (mouseY >= y && mouseY <= y+height)

  if (mouseX >= 75 && mouseX <= 125 && mouseY >= 75 && mouseY <= 125) {
    isOverRectangle = true;
  } else {
    isOverRectangle = false;
  }
  
  // draw a rectangle
  stroke(0);
  strokeWeight(5);
  
  if(isOverRectangle == true) {
    fill(100);
    cursor(HAND); // change the cursor!
  } 
  else {
    fill(200); 
    cursor(ARROW); 
  }

  rect(75, 75, 50, 50);
}
 
function mousePressed() {
  // wwe check if we are over the rectangle when the mouse is pressed
  if(isOverRectangle == true) {
    backgroundColor = color(random(255), random(255), random(255));
  }
}