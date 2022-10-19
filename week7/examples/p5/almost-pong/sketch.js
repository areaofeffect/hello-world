var ballX = 100;
var ballY = 100;

var ballXV = -4;
var ballYV = 1;

var rectX = 10;
var rectY = 10;

var lives = 3;

function setup() {
  createCanvas(200, 200);
  background(0);
  noStroke();
  fill(0, 255, 0);  
}

function draw() {
  rect(300,30,50,50);
  background(0);  
  setText();
  setShapes();    
  bounceCheck();
  increment();
  scoreCheck();  
}

function increment() {  
  ballX += ballXV;  
  ballY += ballYV;
  
  if(millis() % 1000 == 0) {
    ballXV = ballXV * 2;
  }
}

function mouseMoved() {
  rectY = mouseY;
}

function ball(x, y) {
  ellipse(x - 2, y, 30, 30);
  ellipse(x, y, 15, 15);
}

function setShapes() {
  fill(255);
  rect(rectX, rectY, 20, 75);
  ball(ballX, ballY);
}

function sliderBounce() {
  if(rectY < ballY && rectY + 100 > ballY) {
    ballXV = ballXV * -1;
    lives += 1;
  }
}

function wallBounce() {
  ballXV = ballXV * -1;
}

function bounceCheck() {
  if(ballY < 0 || ballY > 200) {
    ballYV = ballYV * -1;
  }
  
  if(ballX < 40 && ballXV < 0) {
    sliderBounce();
  }
  
  if(ballX > 200 && ballXV > 0) {
    wallBounce();
  }
  
  if(ballX < 0) {
    ballX = 200;
    lives -= 1;
  }
}

function scoreCheck() {
  if(lives == 0) {
    noLoop();
    lives = "YOU LOSE";
  }
  
  if(lives == 10) {
    noLoop();
    lives = "YOU WIN";
  }
}

function setText() {
  textAlign(CENTER);
  textSize(22);
  text(lives, 10, 20);
}