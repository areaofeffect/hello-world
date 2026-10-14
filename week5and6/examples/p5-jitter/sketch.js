// Jitter
//
// The classic p5 "Objects" example: create a Jitter class, make one
// object from it, and move it around the screen.
// Adapted from Getting Started with Processing by Casey Reas and Ben Fry.
//
// Originally at https://p5js.org/examples/objects-objects.html (now removed).
// Source: https://github.com/processing/p5.js-website-legacy/blob/main/src/data/examples/en/11_Objects/01_Objects.js

let bug; // Declare a variable to hold our object

function setup() {
  createCanvas(710, 400);
  // Create the object from the class
  bug = new Jitter();
}

function draw() {
  background(50, 89, 100);
  bug.move();
  bug.display();
}

// Jitter class
// A class is a blueprint. `new Jitter()` builds one bug from it.
class Jitter {
  // The constructor runs once when the object is created
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  // Nudge the bug a little in a random direction
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  // Draw the bug at its current position
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
