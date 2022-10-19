var bugs = [];
var numBugs = 50;
var allBlue = true;


function setup(){
	
  // var timer = select('#timer');
  // timer.html('blah');
	createCanvas(windowWidth, 600);

  

	for (var i=0; i<=numBugs; i++){
    bugs[i] = new Jitter();
  }

}




function draw(){

	//graphic frame 
	background(100);

  var s = second();
  text("Current second: \n" + s, 5, 50);

	for (var i=0; i<numBugs; i++){
  	bugs[i].move();
  	bugs[i].display();
    bugs[i].bounce();
  
  
    var distance = dist(mouseX, mouseY, bugs[i].x, bugs[i].y);  
    if (distance <= bugs[i].diameter / 2) {
      bugs[i].r  = 0;
      bugs[i].g  = 0;
      bugs[i].b  = 255;}

    }
  blueCheck();
  if (allBlue == true){
    console.log('done');
  }
  else{ console.log('nope');}
} // draw ends here

function blueCheck(){
  for (var i=0; i<numBugs; i++){
    if (bugs[i].r == 0 && bugs[i].g == 0 && bugs[i].b == 255){
      console.log('blue');
    }
    else {
      console.log('notdone');
      allBlue == false;
    }
    
  }
}
// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(40, 100);
  this.xspeed = random(-10,20);
  this.yspeed = random(-10,20);
  this.direction = random(-0.7, 0.7);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

//move in all different directions
  this.move = function() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;  
  }

//bounce when touch edge of canvas

  this.bounce = function() {
    if (this.x < 0){
      this.x = 0;
      this.direction = -this.direction;}
    else if (this.y <0){
      this.y = 0;
      this.direction = -this.direction;
    }
    else if (this.x > width - this.diameter){
      this.x = width - this.diameter
      this.direction = -this.direction;
    }
    else if (this.y > height - this.diameter){
      this.y = height - this.diameter
      this.direction = -this.direction;
    }
    }

    



  this.display = function() {
    noStroke();
    fill(this.r, this.g, this.b);
  	ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}



