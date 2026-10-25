// Virtual Creature with State Machine
// This example demonstrates how to use a state machine
// to model complex behavior based on multiple stats

let creature;

function setup() {
  createCanvas(600, 600);
  creature = new Creature(width / 2, height / 2);
}

function draw() {
  background(220, 240, 255);

  // Update and display creature
  creature.update();
  creature.display();

  // Display UI
  displayUI();
}

function mousePressed() {
  creature.handleClick(mouseX, mouseY);
}

class Creature {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 120;

    // Stats (0-100)
    this.hunger = 50;
    this.energy = 50;
    this.happiness = 50;

    // Current mood/state
    this.mood = "HAPPY";

    // Visual properties
    this.bounce = 0;
    this.bounceSpeed = 0.1;
  }

  update() {
    // Stats decay over time
    this.hunger = constrain(this.hunger - 0.08, 0, 100);
    this.energy = constrain(this.energy - 0.05, 0, 100);
    this.happiness = constrain(this.happiness - 0.06, 0, 100);

    // Update mood based on stats (STATE MACHINE LOGIC)
    this.updateMood();

    // Simple animation
    this.bounce += this.bounceSpeed;
  }

  updateMood() {
    // Priority-based state transitions
    // Check most urgent needs first

    if (this.hunger < 20) {
      this.mood = "HUNGRY";
    } else if (this.energy < 20) {
      this.mood = "TIRED";
    } else if (this.happiness < 25) {
      this.mood = "BORED";
    } else if (this.hunger < 40 && this.energy < 40) {
      this.mood = "WORRIED";
    } else if (this.hunger > 70 && this.energy > 70 && this.happiness > 70) {
      this.mood = "EXCITED";
    } else {
      this.mood = "HAPPY";
    }
  }

  display() {
    push();
    translate(this.x, this.y + sin(this.bounce) * 10);

    // Choose color based on mood (state)
    let creatureColor;
    switch (this.mood) {
      case "HAPPY":
        creatureColor = color(100, 200, 100);
        break;
      case "HUNGRY":
        creatureColor = color(255, 150, 100);
        break;
      case "TIRED":
        creatureColor = color(150, 150, 200);
        break;
      case "BORED":
        creatureColor = color(180, 180, 180);
        break;
      case "WORRIED":
        creatureColor = color(255, 200, 100);
        break;
      case "EXCITED":
        creatureColor = color(255, 100, 255);
        break;
      default:
        creatureColor = color(200, 200, 200);
    }

    // Draw body
    fill(creatureColor);
    noStroke();
    ellipse(0, 0, this.size, this.size);

    // Draw eyes based on mood
    this.drawEyes();

    // Draw mouth based on mood
    this.drawMouth();

    pop();

    // Display mood state
    fill(0);
    textAlign(CENTER);
    textSize(24);
    text("Mood: " + this.mood, this.x, this.y + this.size);
  }

  drawEyes() {
    fill(255);
    stroke(0);
    strokeWeight(2);

    if (this.mood === "TIRED") {
      // Sleepy eyes (lines)
      line(-20, -10, -10, -10);
      line(10, -10, 20, -10);
    } else {
      // Normal eyes
      ellipse(-20, -10, 20, 25);
      ellipse(20, -10, 20, 25);

      // Pupils
      fill(0);
      noStroke();
      ellipse(-20, -8, 10, 10);
      ellipse(20, -8, 10, 10);
    }
  }

  drawMouth() {
    stroke(0);
    strokeWeight(3);
    noFill();

    switch (this.mood) {
      case "HAPPY":
      case "EXCITED":
        // Smile
        arc(0, 15, 40, 30, 0, PI);
        break;
      case "HUNGRY":
        // Open mouth
        fill(50);
        ellipse(0, 20, 25, 30);
        break;
      case "TIRED":
        // Small "o"
        ellipse(0, 20, 15, 15);
        break;
      case "BORED":
      case "WORRIED":
        // Frown
        arc(0, 30, 40, 20, PI, TWO_PI);
        break;
    }
  }

  handleClick(mx, my) {
    // Check if click is on creature
    let d = dist(mx, my, this.x, this.y);
    if (d < this.size / 2) {
      // Perform action based on current mood
      switch (this.mood) {
        case "HUNGRY":
          this.feed();
          break;
        case "TIRED":
          this.rest();
          break;
        case "BORED":
          this.play();
          break;
        default:
          this.play();  // Default to play
          break;
      }
    }
  }

  feed() {
    this.hunger = constrain(this.hunger + 30, 0, 100);
    console.log("Fed the creature!");
  }

  rest() {
    this.energy = constrain(this.energy + 35, 0, 100);
    console.log("Creature rested!");
  }

  play() {
    this.happiness = constrain(this.happiness + 25, 0, 100);
    this.energy = constrain(this.energy - 10, 0, 100);
    console.log("Played with creature!");
  }
}

function displayUI() {
  // Display stats
  let barWidth = 200;
  let barHeight = 25;
  let startX = 20;
  let startY = 20;
  let spacing = 40;

  textAlign(LEFT);
  textSize(16);
  fill(0);

  // Hunger bar
  text("Hunger:", startX, startY + 18);
  drawStatBar(startX + 80, startY, barWidth, barHeight, creature.hunger, color(255, 150, 100));

  // Energy bar
  text("Energy:", startX, startY + spacing + 18);
  drawStatBar(startX + 80, startY + spacing, barWidth, barHeight, creature.energy, color(100, 150, 255));

  // Happiness bar
  text("Happiness:", startX, startY + spacing * 2 + 18);
  drawStatBar(startX + 80, startY + spacing * 2, barWidth, barHeight, creature.happiness, color(255, 220, 100));

  // Instructions based on mood
  fill(100);
  textSize(14);
  textAlign(CENTER);
  text(getMoodInstruction(), width / 2, height - 30);
}

function drawStatBar(x, y, w, h, value, col) {
  // Background
  fill(230);
  noStroke();
  rect(x, y, w, h, 5);

  // Value
  fill(col);
  let barW = map(value, 0, 100, 0, w);
  rect(x, y, barW, h, 5);

  // Outline
  noFill();
  stroke(100);
  strokeWeight(2);
  rect(x, y, w, h, 5);
}

function getMoodInstruction() {
  switch (creature.mood) {
    case "HUNGRY":
      return "Your creature is HUNGRY! Click to feed it.";
    case "TIRED":
      return "Your creature is TIRED! Click to let it rest.";
    case "BORED":
      return "Your creature is BORED! Click to play with it.";
    case "WORRIED":
      return "Your creature is WORRIED! It needs care soon.";
    case "EXCITED":
      return "Your creature is EXCITED! Great job taking care of it!";
    case "HAPPY":
      return "Your creature is HAPPY! Keep up the good work.";
    default:
      return "Click your creature to interact!";
  }
}
