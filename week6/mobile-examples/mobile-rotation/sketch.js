// Position Variables
var x = 100;
var y = 100;
 
function setup() {
    createCanvas(200, 200);
    vx = displayWidth;
    vy = displayHeight;
    fill(0);
}

function draw() {
    background(127);

    // rotationX, Y, Z is rotation from your device!
    // it uses the acceleromter from your phone
    // it goes 0,360 in degrees
    var xRotation = rotationX; 
    var yRotation = rotationY; 
    var zRotation = rotationZ;

    // Using the acceleromter for position.
	// draw the ball based on your phones rotation
	x = map(rotationY, -90, 90, -displayWidth / 2, displayWidth);
	y = map(rotationX, -90, 90, -displayHeight / 2, displayHeight);
    
    // using the acclerometer to chage the color.
    var r = map(xRotation, -90, 90, 0, 255);
    var g = map(zRotation, -90, 90, 0, 255);
    var b = map(yRotation, -90, 90, 0, 255);   

    // draw the ball
    fill(r, g, b)
    ellipse(x, y, 20, 20);

    text(round(xRotation), 20, 20); // we round the float for nice printing
    text(round(yRotation), 20, 40);
    text(round(zRotation), 20, 60);
}