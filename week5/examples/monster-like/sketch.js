// a clock monster based on time
// more features coming soon...

let monsterProperties = {
  "name" : "monster",
  "shape" : "slime",
  "color" : [0,0,0],
  "age" : 0,
  "posX" : 0,
  "posY" : 0,
  "size" : 0,
  "healthy" : 1,
  "happy" : 0,
  "tired" : 0,
  "hunger" : 0,
  "mood" : 1
}

// keep track of our gamestate and actions
// TODO: this feature is coming soon
let gamestate = "none" // menu, mainLoop, changingDay, gameover

// p5.js communicates with the clock on your computer.
// keep track of time, c is short for current
let cDay;
let cMonth;
let cYear;
let cHour;
let cMinute;
let cSecond;
let cMillis;

// using the time from your computer we perform calculations
// to measure how much time has passed in-game
// the game world advances 1 day each minute
let gameDaysPassed = 0;
let resetTime = 0;
let lengthOfDay = 60000;
let timeLeftInDay;
let formattedTimeString;

// colors
let darkG = "#081820";
let oliveG = "#346856";
let limeG = "#88c070";
let seaG = "#e0f8d0";

// ui
let button;

// environment
let lightState = true;

// fleas
let hasFleas = false;
let flyX;
let flyY;

// food
let hasFood = false;
let foodX = 0;
let foodY = 0;

function setup() {
  createCanvas(320, 160);
  getCurrentTime(); // we get the time they start the game
  generateMonster();
  noStroke();

  // generate fly in random location
  flyX = random(width);
  flyY = random(height);

  // start monster in center
  monsterProperties["posX"] = width/2;
  monsterProperties["posY"] = height/2;

  // light button
  lightButton = createButton('light');
  lightButton.position(width/2 - 60, height - 30);
  lightButton.style('font-family', 'Comic Sans MS');
  lightButton.style('font-size', '10px');
  lightButton.style('align', 'center');
  lightButton.mousePressed(light);

  // play button
  playButton = createButton('play');
  playButton.position(width/2 - 10, height - 30);
  playButton.style('font-family', 'Comic Sans MS');
  playButton.style('font-size', '10px');
  playButton.mousePressed(play);

  // poop button
  poopButton = createButton('poop');
  poopButton.position(width/2 + 35, height - 30);
  poopButton.style('font-family', 'Comic Sans MS');
  poopButton.style('font-size', '10px');
  poopButton.mousePressed(poop);  
}

function draw() {
  // draw background scene
  if (lightState == true) {
    background(seaG);
  } else {
    background(darkG);
  }
  
  // draw ui
  getCurrentTime();
  drawUI();

  // his little brain
  moveMonster();
  drawMonster();

  // enemies
  checkForFleas();
  
  if (hasFleas) {
    drawFleas();
  }
  
  // draw food
  if (hasFood) {
    drawFood();
  }

  checkCollisionWithFood();
}

function drawUI() {
  fill(oliveG);
  rect(0,0, width, 20);
  fill(darkG);
  textAlign(RIGHT);
  fill(seaG);
  text(formattedTimeString, width - 10, 15);
  textAlign(LEFT);
  fill(seaG);
  text("Age: " + monsterProperties["age"], 10, 15);
  text("Healthy: " + monsterProperties["healthy"], 50, 15);

  // calculate time left in day
  timeLeftInDay = lengthOfDay - (cMillis - resetTime);

  // map the amount of time left so we can draw a rectangle
  let mappedTime = map(timeLeftInDay,lengthOfDay,0,0,width);
  fill(darkG);
  rectMode(CORNER);
  rect(0, height - 5, mappedTime, 5);
}

function gameOver() {
  noLoop();
  textAlign(CENTER);
  textSize(32);
  text("GAME OVER", width/2, height/2) + 5;
}

function checkForFleas() {
  let fleaRoll = int(random(500));
  if (fleaRoll == 50 && !hasFleas && monsterProperties["age"] >= 3) {
    hasFleas = true; // 1 in 100 chance!
    flyX = random(width);
    flyY = random(height);
  }

}

function drawFleas() {
  flyX += random(-1, 1);
  flyY += random(-1, 1);

  flyX = constrain(flyX, 100, 200);
  flyY = constrain(flyY, 50, 110);

  fill(darkG);
  ellipse(flyX, flyY, 5, 5);

  if (dist(monsterProperties["posX"], monsterProperties["posY"], flyX, flyY) <= 20) {
    if (monsterProperties["healthy"]  > 0) {
      monsterProperties["healthy"] -= 1;
    } 
  }

  if (monsterProperties["healthy"] <= 0) {
    gameOver();
  }
}

function play() {
  if (monsterProperties["mood"] < 4) {
    monsterProperties["mood"] += 1;
  }

  console.log("current mood: " + monsterProperties["mood"]);
  console.log("play... coming soon!");
}

function poop() {
  console.log("poop... coming soon!");
}

function light() {
  if (monsterProperties["mood"] > 0) {
    monsterProperties["mood"] -= 1;
  }

  console.log("toggle light: " + lightState);

  // this is a clever way to toggle a variable on and off
  lightState = !lightState;
}

function feed() {
  console.log("feeding...");
}

function newDay() {
  // each minute is one day
  gameDaysPassed += 1
  monsterProperties["age"] = gameDaysPassed;
}

function getCurrentTime() {
  cDay = day();
  cMonth = month();
  cYear = year();
  cHour = hour();

  // conver5 24 hour to 12 hour am/pm
  if (cHour >= 12) cHour = cHour - 12;
  if (cHour == 0) cHour = 12;

  cMinute = minute();
  cSecond = second();
  cMillis = floor(millis());

  // this is an example of a timer; that ticks every minute (lengthOfDay = 60000ms)
  // if the time passed is greator than then length of day
  if (cMillis >= resetTime + lengthOfDay) {
    resetTime = floor(millis());
    newDay();
  }

  formattedTimeString = cMonth + "/" + cDay + "/" + cYear;
}



function drawFood() {
  fill(limeG);
  ellipse(foodX, foodY, 10, 10);
}

function checkCollisionWithFood() {
  // if the distance between monster and food is close, he eats it
  if (dist(monsterProperties["posX"], monsterProperties["posY"], foodX, foodY) <= 10) {
    if (monsterProperties["healthy"] < 4 && hasFood) {
      monsterProperties["healthy"] += 1;
      monsterProperties["mood"] += 1;
      hasFood = false;
    }
  }
}

// When the user clicks the mouse
function mousePressed() {
  // click to add food and exterminate fleas
  if (hasFleas) {
    let d = dist(mouseX, mouseY, flyX, flyY);
    if (d < 10) {
      hasFleas = false;
    }
  } else if(!hasFood) {
    hasFood = true;
    foodX = mouseX;
    foodY = mouseY;
  }
}
