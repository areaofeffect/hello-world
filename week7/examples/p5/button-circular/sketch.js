var backgroundColor;
var isOverCircle;
 
function setup() 
{
  // set canvas size
  createCanvas(400, 400);
  
  // default background color
  backgroundColor = color(255, 255, 255);
}
 
function draw() 
{
  background(backgroundColor);
 
  // get distance between mouse and circle
  var distance = dist(mouseX, mouseY, 200, 200); 
  
  // if the distance is less than the circle's radius
  if(distance < 50)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
  // draw a circle
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  if(isOverCircle == true)
  {
    fill(100);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(200, 200, 100, 100);
  
}
 
function mousePressed()
{
  if(isOverCircle == true)
  {
    backgroundColor = color(random(255), random(255), random(255));
  }
}