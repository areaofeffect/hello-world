function setup() {
  createCanvas(1200, 600);
  background(0);
  noStroke();
  fill(0, 255, 0);  
}

var ballX = 600;
var ballY = 600;

var ballXV = -4;
var ballYV = 1;

var rectX = 10;
var rectY = 100;
var rectX2 = 1150;
var rectY2 = 100;

var lives1 = 2;
var lives2 = 2;
var rounds = 1;

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
    ballXV = ballXV * 1;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    rectY2 = rectY2 - 30;
  } else if (keyCode === DOWN_ARROW) {
    rectY2 = rectY2 + 30;
  }

  if (keyCode === 87){
  	rectY = rectY - 30;
  } else if (keyCode === 83) {
  	rectY = rectY +30;
  }
}


function ball(x, y) {
  ellipse(x - 2, y, 30, 30);
  ellipse(x, y, 15, 15);
}

function setShapes() {
  fill(255);
  rect(rectX, rectY, 20, 75);
  fill(255);
  rect(rectX2, rectY2, 20, 75);
  ball(ballX, ballY);
}

function p1Bounce() {
  if(rectY < ballY && rectY + 100 > ballY) {
    ballXV = ballXV * -1;
    rounds += 1;
  } 
}

function p2Bounce() {
  if(rectY2 < ballY && rectY2 + 100 > ballY) {
    ballXV = ballXV * -1;
    rounds += 1;
  } 
}

function bounceCheck() {
  if(ballY < 0 || ballY > 600) {
    ballYV = ballYV * -1;
  }
  
  if(ballX < 40 && ballXV < 0) {
    p1Bounce();
  }
  
  if(ballX > 1150 && ballXV > 0) {
    p2Bounce();
  }
  
  if(ballX < 0) {
    ballX = 1000;
    lives1 -= 1;
    rounds += 1;
  }
  if(ballX > 1200) {
    ballX = 200;
    lives2 -= 1;
    rounds += 1;
  }
}

function scoreCheck() {
  if(lives1 == 0) {
    textAlign(CENTER);
  	textSize(60);
  	text("winner is P2", 600, 300);
    noLoop();
  }
  
  if(lives2 == 0) {
    textAlign(CENTER);
  	textSize(60);
  	text("winner is P1", 600, 300);
    noLoop();
  }
}

function setText() {
  textAlign(CENTER);
  textSize(22);
  text(lives1, 30, 20);
  text(lives2, 1100, 20);
  text("rounds " + rounds, 600, 20);


}