var ballX = 400;
var ballY = 200;

var ballXV = -8;
var ballYV = 1;

var rect1X = 10;
var rect1Y = 10;

var rect2X = 770;
var rect2Y = 10;

var p1 = 5;
var p2 = 5;

var intro = "Press Space Bar to Start Game";
var value = 0;

function setup() {
  createCanvas(800, 400);
  background(0);
  noStroke();
}

function keyPressed() {
  if(keyCode == 32) {
    value += 1;
  }
}

function draw() {  
  fill(0, 255, 0); 
  rect(400,30,50,50);
  background(29, 23, 165);
  setShapes();
  setText();
  keyboardMoved();   
  bounceCheck();
  scoreCheck();
  if (value % 2) {
    increment();
  }
}

function increment() {  
  ballX += ballXV;  
  ballY += ballYV;
  
  if(millis() % 1000 == 0) {
    ballXV = ballXV * 2;
  }
}

function keyboardMoved() {
  if (keyIsDown(65))
    rect1Y -= 10;
  if (keyIsDown(90))
    rect1Y += 10;
  if (keyIsDown(UP_ARROW))
    rect2Y -= 10;
  if (keyIsDown(DOWN_ARROW))
    rect2Y += 10;
}

function ball(x, y) {
  ellipse(x - 2, y, 30, 30);
  ellipse(x, y, 15, 15);
}

function setShapes() {
  fill(255);
  ball(ballX, ballY);
  fill(255);
  rect(0, 200, 800, 1); // draw horizontal line
  fill(255);
  rect(399, 0, 3, 400); // draw vertical line
  fill(0, 205, 105); // green color
  rect(rect1X, rect1Y, 20, 100);
  fill(235, 0, 50); // red color
  rect(rect2X, rect2Y, 20, 100);
}

function sliderBounce() {
  if(rect1Y < ballY && rect1Y + 100 > ballY) {
    ballXV = ballXV * -1;
  }
  if (rect1Y + 50 == ballY) {
    ballXV = ballXV * -1;
  }
  if(rect2Y < ballY && rect2Y + 100 > ballY) {
    ballXV = ballXV * -1;
  }
  if (rect2Y + 50 == ballY) {
    ballXV = ballXV * -1;
  }
  // sets limit for bar distance
  if(rect1Y < -400) {
    rect1Y = -400;
  }
  if(rect1Y > 400) {
    rect1Y = 400;
  }
  if(rect2Y < -400) {
    rect2Y = -400;
  }
  if(rect2Y > 400) {
    rect2Y = 400;
  }
}

function bounceCheck() {
  if(ballY < 0 || ballY > 400) {
    ballYV = ballYV * -1;
  }
  
  if(ballX < 40 && ballXV < 0) {
    sliderBounce();
  }
  
  if(ballX > 760 && ballXV > 0) {
    sliderBounce();
  }
  
  if(ballX < 0) {
    ballX = 400;
    p1 -= 1;
  }

  if(ballX > 800) {
    ballX = 400;
    p2 -= 1;
  }
}

function scoreCheck() {
  if(p1 == 0) {
    //stop the ball
    ballXV = 0;
    ballYV = 0;
    result = "P2 WINS";
    fill(235, 0, 50); // red color
    setWinner();
    resetGame();
  }
  if(p2 == 0) {
    //stop the ball
    ballXV = 0;
    ballYV = 0;
    result = "P1 WINS";
    fill(0, 205, 105); // green color
    setWinner();
    resetGame();
  }
}

function setText() {
  textAlign(CENTER);
  textSize(40);
  fill(0, 205, 105); // green color
  text(p1, 360, 50);
  fill(235, 0, 50); // red color
  text(p2, 440, 50);
}

function setWinner() {
  textAlign(CENTER);
  textSize(50);
  text(result, 400, 100);
}

function resetGame() {

  if (keyCode == RETURN) {
    p1 = 5;
    p2 = 5;
    value = 0;
    ballXV = -8;
    ballYV = 1;
    if (value % 2) {
      increment();
    }
  }
}