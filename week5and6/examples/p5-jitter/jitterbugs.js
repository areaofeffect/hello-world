// Jitterbugs
//
// The same Jitter idea, but with 25 bugs stored in an array, each with
// its own random color. Move your mouse over a bug to turn it red.
//
// Based on Bruno's jitterbugs gist:
// https://gist.github.com/brunokruse/fcd85f3ec8c1da3f2b6759d152360611
//
// To run this version, change the script tag in index.html from
// sketch.js to jitterbugs.js

let bugCollection = []; // An array to hold all our bugs
let numBugs = 25;

function setup() {
  createCanvas(710, 400);

  // Make numBugs bugs and store each one in the array
  for (let i = 0; i < numBugs; i++) {
    bugCollection[i] = new Jitter();
  }
}

function draw() {
  background(50, 89, 100);

  // Loop over every bug in the array
  for (let i = 0; i < numBugs; i++) {
    bugCollection[i].move();
    bugCollection[i].display();

    // How far is the mouse from this bug?
    let distance = dist(mouseX, mouseY, bugCollection[i].x, bugCollection[i].y);

    // If the mouse is inside the bug, turn it red
    if (distance <= bugCollection[i].diameter / 2) {
      bugCollection[i].r = 255;
      bugCollection[i].g = 0;
      bugCollection[i].b = 0;
    }
  }
}

// Jitter class, now with a color
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 20);

    // Each bug gets its own random color
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
