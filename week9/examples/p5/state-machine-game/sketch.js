// State Machine Game Example
// Demonstrates the basic three-state pattern: MENU, PLAYING, GAMEOVER

// Game state variable - can only be in ONE state at a time
let gameState = "MENU";

// Game variables
let score = 0;
let timer = 0;
let maxTime = 300; // 5 seconds at 60fps

// Visual feedback
let clickEffect = [];
let highScore = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Different behavior based on current state
  if (gameState === "MENU") {
    drawMenu();
  } else if (gameState === "PLAYING") {
    drawPlaying();
  } else if (gameState === "GAMEOVER") {
    drawGameOver();
  }

  // Draw click effects (in all states)
  updateClickEffects();
}

// ==================== MENU STATE ====================
function drawMenu() {
  background(52, 73, 94);

  // Title
  fill(236, 240, 241);
  textSize(48);
  text("CLICK CHALLENGE", width / 2, height / 3);

  // Instructions
  textSize(24);
  text("How many times can you click", width / 2, height / 2 - 20);
  text("in 5 seconds?", width / 2, height / 2 + 20);

  // Start prompt
  textSize(32);
  fill(46, 204, 113);
  let alpha = map(sin(frameCount * 0.1), -1, 1, 100, 255);
  fill(46, 204, 113, alpha);
  text("Press SPACE to start", width / 2, height * 2 / 3);

  // High score
  if (highScore > 0) {
    fill(241, 196, 15);
    textSize(20);
    text("High Score: " + highScore, width / 2, height - 60);
  }
}

// ==================== PLAYING STATE ====================
function drawPlaying() {
  background(41, 128, 185);

  // Update timer
  timer++;
  if (timer >= maxTime) {
    // Transition to GAMEOVER state
    gameState = "GAMEOVER";
    if (score > highScore) {
      highScore = score;
    }
    return;
  }

  // Display score
  fill(255);
  textSize(72);
  text(score, width / 2, height / 2);

  // Display timer
  let timeLeft = (maxTime - timer) / 60;
  textSize(32);
  text("Time: " + timeLeft.toFixed(1) + "s", width / 2, height / 2 + 100);

  // Click instruction
  textSize(20);
  text("CLICK ANYWHERE!", width / 2, height - 60);

  // Timer bar
  drawTimerBar();
}

function drawTimerBar() {
  let barWidth = width - 100;
  let barHeight = 30;
  let barX = 50;
  let barY = 80;

  // Background
  noStroke();
  fill(30, 50, 70);
  rect(barX, barY, barWidth, barHeight, 5);

  // Progress
  let progress = 1 - (timer / maxTime);
  fill(46, 204, 113);
  rect(barX, barY, barWidth * progress, barHeight, 5);

  // Outline
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(barX, barY, barWidth, barHeight, 5);
}

// ==================== GAMEOVER STATE ====================
function drawGameOver() {
  background(192, 57, 43);

  // Title
  fill(255);
  textSize(64);
  text("GAME OVER", width / 2, height / 3);

  // Final score
  textSize(48);
  text("Score: " + score, width / 2, height / 2);

  // Performance message
  textSize(24);
  let message = getPerformanceMessage(score);
  fill(241, 196, 15);
  text(message, width / 2, height / 2 + 60);

  // High score
  if (score === highScore && score > 0) {
    fill(46, 204, 113);
    textSize(28);
    text("NEW HIGH SCORE!", width / 2, height / 2 + 110);
  }

  // Restart prompt
  fill(255);
  textSize(28);
  let alpha = map(sin(frameCount * 0.1), -1, 1, 100, 255);
  fill(255, alpha);
  text("Press SPACE to return to menu", width / 2, height * 3 / 4);
}

function getPerformanceMessage(score) {
  if (score >= 100) return "INCREDIBLE!";
  if (score >= 75) return "AMAZING!";
  if (score >= 50) return "GREAT JOB!";
  if (score >= 25) return "Nice Try!";
  return "Keep Practicing!";
}

// ==================== STATE TRANSITIONS ====================
function keyPressed() {
  if (key === ' ') {
    if (gameState === "MENU") {
      // Transition from MENU to PLAYING
      gameState = "PLAYING";
      score = 0;
      timer = 0;
      console.log("State: MENU → PLAYING");
    } else if (gameState === "GAMEOVER") {
      // Transition from GAMEOVER back to MENU
      gameState = "MENU";
      console.log("State: GAMEOVER → MENU");
    }
  }

  // Debug: press 'D' to display current state
  if (key === 'd' || key === 'D') {
    console.log("Current state:", gameState);
  }
}

function mousePressed() {
  // Only increment score in PLAYING state
  if (gameState === "PLAYING") {
    score++;

    // Add visual feedback
    clickEffect.push({
      x: mouseX,
      y: mouseY,
      life: 30
    });
  }
}

// ==================== VISUAL EFFECTS ====================
function updateClickEffects() {
  for (let i = clickEffect.length - 1; i >= 0; i--) {
    let effect = clickEffect[i];

    // Draw effect
    push();
    noFill();
    stroke(255, effect.life * 8);
    strokeWeight(3);
    let size = map(effect.life, 30, 0, 10, 50);
    circle(effect.x, effect.y, size);
    pop();

    // Update
    effect.life--;

    // Remove when done
    if (effect.life <= 0) {
      clickEffect.splice(i, 1);
    }
  }
}

// ==================== HELPER VISUALIZATION ====================
// Display current state in corner (helpful for learning)
function displayStateDebug() {
  push();
  fill(0, 150);
  noStroke();
  rect(10, height - 40, 150, 30, 5);

  fill(255);
  textAlign(LEFT, CENTER);
  textSize(16);
  text("State: " + gameState, 20, height - 25);
  pop();
}

// Uncomment this line in draw() to see state debug info:
// displayStateDebug();
