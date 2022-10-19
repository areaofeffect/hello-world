// x position variable
var xpos = 100;
var targetX = 100;
 
// y position variable
var ypos = 100;
var targetY = 100;

// easing variable
var easing = 0.05;

// numPixels variable
var numPixels = 20;
 
function setup() {
  // set canvas size
  createCanvas(200, 200);
}
 
function draw()  {
  // clear background
  background(127);
 
  // set the fill color
  fill(255, 0, 0);

  handleKeyboardEvents();
  calculateEasing();
  
  // black outline
  stroke(0);
 
  // set the ellipse mode
  ellipseMode(CENTER);
 
  // draw a circle
  ellipse(xpos, ypos, 25, 25);
  
}

function calculateEasing() {
  let dx = targetX - xpos;
  xpos += dx * easing;
  
  let dy = targetY - ypos;
  ypos += dy * easing;
}

function handleKeyboardEvents() {
  if (keyIsPressed) {
    // UP key
    if(keyCode == UP_ARROW) {
      targetY = ypos - numPixels;
    }

    // DOWN key
    if(keyCode == DOWN_ARROW) { 
      targetY = ypos + numPixels; 
    }

    // RIGHT key
    if(keyCode == RIGHT_ARROW) {
      targetX = xpos + numPixels; 
    }

    // LEFT key
    if(keyCode == LEFT_ARROW) {
      targetX = xpos - numPixels; 
    }
  }
}