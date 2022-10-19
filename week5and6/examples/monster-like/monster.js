// all of the functions for our monster
// TODO: this will eventually be upgraded to classes

function moveMonster() {
    // small chance he moves around randomly
    let moveRoll = int(random(100));
    if (moveRoll >= 98) {
      monsterProperties["posX"] += random(-20,20);
      monsterProperties["posY"] += random(-20,20);
    
      monsterProperties["posX"] = constrain(monsterProperties["posX"], 0, width);
      monsterProperties["posY"] = constrain(monsterProperties["posY"], 50, 110);
    }
  }
  
  
  function triangleMonster() {
    push();
    translate(monsterProperties["posX"], monsterProperties["posY"]);
    if (monsterProperties["mood"] == "4") {
      rotate(millis() / 1000);
    }
    scale(monsterProperties["size"]);
    triangle(-15, 10, 
             0, -15, 
             15, 10);
    scale(1);
    pop();
  }

  function rectangleMonster() {
    push();
    translate(monsterProperties["posX"], monsterProperties["posY"]);
    if (monsterProperties["mood"] == "4") {
      rotate(millis() / 1000);
    }
    scale(monsterProperties["size"]);
    rect(0, 0, 25, 25);
    scale(1);
    pop();
  }

  function ellipseMonster() {
    push();
    translate(monsterProperties["posX"], monsterProperties["posY"]);
    scale(monsterProperties["size"]);
    ellipse(0, 0, 20, 25);
    scale(1);
    pop();
  }

  function circleMonster() {
    push();
    translate(monsterProperties["posX"], monsterProperties["posY"]);
    scale(monsterProperties["size"]);
    circle(0, 0, 25, 25);
    scale(1);
    pop();
  }

  function calculateMonsterEyes() {
    // DRAW MONSTER EYES
    let sizeOfEyes = 15;
  
    // left
    fill(255);
    ellipse(monsterProperties["posX"] - 10, monsterProperties["posY"] - 10, sizeOfEyes, sizeOfEyes); // eye
    fill(0);
  
    let lpX = monsterProperties["posX"] - 10;
    let lpY = monsterProperties["posY"] - 10;
  
    push();
    //ellipseMode(CENTER);
    translate(lpX,lpY);
    //let angle = atan2(mouseY - pY, mouseX - pX);
    let angleL = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    rotate(angleL);
    fill(0);
    ellipse(6, 0, sizeOfEyes/4, sizeOfEyes/4); // pupil
    
    pop();
  
    // right
    let pX = monsterProperties["posX"] + 10;
    let pY = monsterProperties["posY"] - 10;
  
    fill(255);
    ellipse(monsterProperties["posX"] + 10, monsterProperties["posY"] - 10, sizeOfEyes, sizeOfEyes); // eye
    fill(0);
    
    push();
    translate(pX,pY);
    let angleR = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    rotate(angleR);
    fill(0);
    ellipse(6, 0, sizeOfEyes/4, sizeOfEyes/4); // pupil
    
    pop();
  }

  function drawMonsterMouth() {
    let mouthOffset = 7;
    if (monsterProperties["mood"] == 0) {
      noFill();
      stroke(255);
      arc(monsterProperties["posX"], monsterProperties["posY"] + mouthOffset, 20, 15, PI, 0);
      noStroke();
    } else if (monsterProperties["mood"] == 1) {
      noFill();
      stroke(255);
      line(monsterProperties["posX"] - 5, monsterProperties["posY"], monsterProperties["posX"] + 5, monsterProperties["posY"]);
      noStroke();  
    } else if (monsterProperties["mood"] == 2) {
      fill(255);
      ellipse(monsterProperties["posX"], monsterProperties["posY"] + mouthOffset, 5, 7);
      noFill();
    } else if (monsterProperties["mood"] >= 3) {
      noFill();
      stroke(255);
      arc(monsterProperties["posX"], monsterProperties["posY"] + mouthOffset, 20, 15, 0, PI);
      noStroke();
    }
  }

  function drawMonster() {
    // DRAW MONSTER SHAPE
    // TODO: this can be cleaned up to be nicer ...
  
    // draw monster size based on age
    let calcSize = ((monsterProperties["age"] + 10) * 0.1) * 1.01;
    if (monsterProperties["age"] >= 20) { // soft cap monster size
      monsterProperties["size"] = 3;
    } else {
      monsterProperties["size"] = calcSize;
    }
  
    // we push() and pop() throughout drawing 
    // with use a combination of push(), translate() and pop()
    // to keep everything centered and in the correct place
    push();
    rectMode(CENTER); // to make it easier to draw placed monster elements
    fill(monsterProperties["color"]); // generated color
  
    if (monsterProperties["shape"] == "rectangle") {
        rectangleMonster();
    } else if (monsterProperties["shape"] == "ellipse") {
        ellipseMonster();
    } else if (monsterProperties["shape"] == "circle") {
        circleMonster();
    } else if (monsterProperties["shape"] == "triangle") {
        triangleMonster();
    }
  
    // CALCULATE EYES BASED ON TIME
    calculateMonsterEyes();

    // DRAW MONSTER MOUTH
    drawMonsterMouth();
  
    pop();
  }
  
  // NOTE: we only generate the random values for the monster ONCE
  // and keep track of what we generated for gameplay
  function generateMonster() {
    // color
    // generate a color for our monster
    monsterProperties["color"][0] = random(255);
    monsterProperties["color"][1] = random(255);
    monsterProperties["color"][2] = random(255);
  
    // shape
    // choose a shape for our monster
    let rndShape = int(random(4));
    if (rndShape == 0) {
      monsterProperties["shape"] = "rectangle";
    } else if (rndShape == 1) {
      monsterProperties["shape"] = "ellipse";
    } else if (rndShape == 2) {
      monsterProperties["shape"] = "circle";
    } else if (rndShape == 3) {
      monsterProperties["shape"] = "triangle";
    }
  
    console.log("generatedShape: " + monsterProperties["shape"]);
  }