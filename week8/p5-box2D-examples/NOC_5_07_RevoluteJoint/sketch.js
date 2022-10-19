// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
var world;


// A list for all of our particles
var particles = [];

// An object to describe a Windmill (two bodies and one joint)
var windmill;


var text;

function setup() {
  text = createP("Click mouse to toggle motor.\nMotor: OFF");
  text.position(10,365);

  createCanvas(640,360);

  // Initialize box2d physics and create the world
  world = createWorld();

  // Make the windmill at an x,y position
  windmill = new Windmill(width/2,175);
}

function draw() {
  background(51);

  // We must always step through time!
  var timeStep = 1.0/30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep,10,10);

  if (random(1) < 0.1) {
    var sz = random(4,8);
    particles.push(new Particle(random(width/2-100,width/2+100),-20,sz));
  }


  // Display all the pairs
  for (var i = particles.length-1; i >= 0; i--) {
    particles[i].display();
    if (particles[i].done()) {
      particles.splice(i,1);
    }
  }

  // Draw the windmill
  windmill.display();

  var status = "OFF";
  if (windmill.motorOn()) status = "ON";
  
}

function mousePressed() {
  windmill.toggleMotor();

  var status = "OFF";
  if (windmill.motorOn()) status = "ON";
  text.html("Click mouse to toggle motor.\nMotor: " + status);
}