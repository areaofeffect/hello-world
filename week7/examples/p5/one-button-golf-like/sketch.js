let startPosX = 40;
let startPosY = 160;
let pxpos = 40;
let xpos = 40;
let pypos = 160;
let ypos = 160;
let xspeed = 0;
let yspeed = 0;
let acceleration = 9.81 / 30;
let hasLaunched = false;

let gamestate = "menu";
let launchstate = "done";
let win = false;

let step = 1;
let amount = -45;
let pamount = 0;

let capturedLaunchAngle = 0;
let capturedLaunchSpeed  = 0;

let holeX = 0;
let holeY = 0;

// sound
let osc, playing, freq, amp;

let gif;

let distance = 0;

let grassR = [];
let grassG = [];
let grassB = [];
let pointsX = [];
let pointsY =  [];

function preload() {
  gif = loadImage('img/tiger.gif');
}

function setup() {
  createCanvas(600, 200);
  osc = new p5.Oscillator('sine');
  reset();
}

function draw() {
   //background('#588970');

   fill(88,137,112,30);
   rect(0,0,width,height);
   fill(0);

  if (gamestate == "game") {
    drawHole();
    displayProjectile();
    

    if (launchstate == "ready") {
      // waiting for input
      reset();
      launchstate = "angle";

    } else if (launchstate == "angle") {
      // calculate angle
      drawAngleAnimation();

    } else if (launchstate == "power") {
      // calculate speed
      drawSpeedAnimation();

    } else if (launchstate == "calculating...") {
      // projectile is moving
      if (hasLaunched) {
        moveProjectile();
        checkCollisions();
        freq = constrain(map(xpos, 0, width, 100, 500), 100, 500);
        amp = constrain(map(ypos, height, 0, 0, 1), 0, 1);

        if (playing) {
          // smooth the transitions by 0.1 seconds
          osc.freq(freq, 0.1);
          osc.amp(amp, 0.1);
        }
        distance+=1;
      }
    } else if (launchstate == "done") {
      // projectile is moving
      hasLaunched = false;
      playing = false;
      osc.stop();

      if (win) {
        imageMode(CENTER);
        fill(255);
        image(gif, width/2, height/2, 150, 150);
        fill(0);
      }
    }

    // debug info
    displayInfo();

    // draw the angle and power for debug
    drawUI();

  }
}

function drawUI() {
  if(launchstate == "angle" || launchstate == "power" || launchstate == "calculating..." || launchstate == "done") {

    push();
    translate(startPosX, startPosY);
    rotate(radians(-45));
    fill(0,255,0);
    ellipse(20,0,2,2);
    fill(0);
    pop();
    
    if (launchstate == "power" || launchstate == "calculating..." || launchstate == "done") {
      push();
      translate(startPosX, startPosY);
      rotate(radians(capturedLaunchAngle));
      fill(0);
      ellipse(20,0,5,5);
      fill(0);
      pop();
      
      push();
      translate(startPosX, startPosY);
      rotate(radians(-45));
      fill(0,255,0);
      ellipse(20,0,2,2);
      fill(0);
      pop();

      // bg
      fill(0);
      rect(startPosX - 25, startPosY + 15, 50, 5);

      // sweet spot
      fill(0,255,0);
      rect(startPosX + 10, startPosY + 15, 10, 5);

      // bar
      fill(255);
      rect(startPosX - 25, startPosY + 15, pamount, 5);
      fill(0);

      if (hasLaunched || launchstate == "done") {
        fill(165,42,42);
        ellipse(startPosX, startPosY, 20, 20);
        fill(0);
      }
    }
  }
}

function reset() {
  xpos = startPosX;
  ypos = startPosY;

  gamestate = "game";
  launchstate = "ready";
  hasLaunched = false;
  distance = 0;
  background(88,137,112);

  osc.stop();
  playing = false; 

  holeX = random(width/4, width - 200);
  holeY = random(50, height - 50);

  for (let i = 0; i < 1000; i++) {
    grassR[i] = noise(88);
    grassG[i]  = random(125,200);
    grassB[i] = noise(112);
    pointsX[i] = random(width);
    pointsY[i] = random(height);
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function drawHole() {

  // procedural grass
  for (let i = 0; i < 1000; i++) {
    strokeWeight(1);
    stroke(grassR[i], grassG[i], grassB[i]); 
    point(pointsX[i], pointsY[i]);
    noStroke();
  }
  
  // the green
  fill(88,175,112,30); 
  ellipse(holeX, holeY, 100, 100);  

  // the hole
  fill(0);
  ellipse(holeX, holeY, 20, 20);
  stroke(255);
  line(holeX, holeY, holeX, holeY - 30);
  noStroke();

  // flag
  fill(255,0,0);
  triangle(holeX - 10, holeY - 20, holeX, holeY - 30, holeX, holeY - 10);
  fill(0);
  

}
function drawAngleAnimation() {
  
  // oscillate the angle from -90 to 0
  if (amount < -90 || amount > 0) {
    step *= -1;
  }
  amount += step;

  // assign to yspeed
  let distanceToPerfect = abs(abs(amount) - 45);  
  let angleToSpeed = map(distanceToPerfect, 0, 45, 2 , 0);

  yspeed = angleToSpeed;
  capturedLaunchAngle = amount;

  // move target along arc
  push();
  translate(startPosX, startPosY);
  rotate(radians(amount));
  ellipse(20,0,5,5);
  pop();


}

function drawSpeedAnimation() {
  // move object back and forth
  // oscillate the angle from -90 to 0
  if (pamount < 0 || pamount > 50) {
    step *= -1;
  }
  pamount += step;

  xspeed = map(pamount, 0, 50, 0, 2);
 

  //xspeed = 1;
  capturedLaunchSpeed = pamount;

  // // bg
  // fill(0);
  // rect(startPosX - 25, startPosY + 15, 50, 5);

  // // sweet spot
  // fill(255,0,0);
  // rect((startPosX - 25), startPosY + 15, 20, 5);

  // // bar
  // fill(255);
  // rect(startPosX - 25, startPosY + 15, pamount, 5);
  // fill(0);
}

function displayProjectile() {
  fill(0,0,255);
  ellipse(xpos, ypos, 15, 15);
  fill(0);
}

function moveProjectile() {
  pxpos = xpos;
  pypos = ypos;

  xpos = xpos + xspeed;
  ypos = ypos - yspeed;
  
  //xspeed *= 0.9;
  yspeed = yspeed - (0.01 * (xspeed));
}

function checkCollisions() {
  if (xpos + 20 > width) {
    xpos = width - 20;
    launchstate = "done"; 
    console.log("done");
    console.log("you lose!!!");
    win = false;

  }

  if (ypos + 20 > height) { 
    ypos = height - 20;
    launchstate = "done";
    console.log("done");
    console.log("you lose!!!");
    win = false;

  }

  if (dist(xpos, ypos, holeX, holeY) < 15) {
    launchstate = "done";
    console.log("done");
    console.log("you win!!!");
    win = true;
  }
}

function displayInfo() {
  textSize(10);
  fill(255);
  text("launchstate: " + launchstate, 10, 20);
  text("angle: " + abs(capturedLaunchAngle), 10, 30);
  text("speed : " + capturedLaunchSpeed, 10, 40);
  fill(255);
  textAlign(CENTER);
  text("press space to advance", width/2, startPosY + 30);
  
  textAlign(LEFT);
  let distanceBonus = dist(holeX, holeY, startPosX, startPosY);
  text("distance: " + distance, width-75,20);
  text("bonus: " + round(distanceBonus/100,2), width-75,30);
  text("score: " + ceil(distance * distanceBonus), width-75,40);

}

function keyPressed(){
  console.log("key pressed: " + key);

  if (gamestate == "game" && launchstate == "angle") {
    // when a key is pressed go to next phase
    if (key == ' ') {
      launchstate = "power";
      return;
    }
  }

  if (gamestate == "game" && launchstate == "power") {
      // when a key is pressed use the values to launch
      if (key == ' ') {
        launchstate = "calculating...";
        hasLaunched = true;
        playOscillator();
        return;
      }
  }

  if (gamestate == "game" && launchstate == "done") {
    // when a key is pressed use the values to launch
    if (key == ' ') {
      hasLaunched = false;
      reset();
      return;
    }
  }

  if (gamestate == "game") {
    // when a key is pressed use the values to launch
    if (key == 'r') {
      reset();
      return;
    }
  }
}