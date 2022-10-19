// x position variable
var xpos = 100;
 
// y position variable
var ypos = 100;
 
// numPixels variable
var numPixels = 10;
 
function setup() {
  // set canvas size
  createCanvas(200, 200);
}
 
function draw()  {
  // clear background
  background(127);
 
  // set the fill color
  fill(255, 0, 0);
 
  // black outline
  stroke(0);
 
  // set the ellipse mode
  ellipseMode(CENTER);
 
  // draw a circle
  ellipse(xpos, ypos, 25, 25);  
}
 
function keyPressed(){
  // UP key
  if(keyCode == UP_ARROW) {
    ypos = ypos - numPixels; 
  }
 
  // DOWN key
  if(keyCode == DOWN_ARROW) { 
    ypos = ypos + numPixels; 
  }
 
  // RIGHT key
  if(keyCode == RIGHT_ARROW) {
    xpos = xpos + numPixels; 
  }
 
  // LEFT key
  if(keyCode == LEFT_ARROW) {
    xpos = xpos - numPixels; 
  }

  return false;
}