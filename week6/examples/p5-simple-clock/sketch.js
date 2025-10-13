// Simple Clock using Classes
// Demonstrates using a class to organize time display

// TimeDisplay class - handles displaying a time value
class TimeDisplay {
  constructor(x, y, label) {
    this.x = x;
    this.y = y;
    this.label = label;
    this.value = 0;
  }

  // Update the time value
  update(newValue) {
    this.value = newValue;
  }

  // Display the time with label
  display() {
    // Draw label
    fill(150);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y - 40);

    // Draw the value with leading zero if needed
    fill(255);
    textSize(72);
    let displayValue = nf(this.value, 2); // nf() adds leading zeros
    text(displayValue, this.x, this.y);

    // Draw colon separator (except for seconds)
    if (this.label !== "SECONDS") {
      fill(255);
      textSize(72);
      text(":", this.x + 80, this.y);
    }
  }
}

// Create three TimeDisplay objects
let hourDisplay;
let minuteDisplay;
let secondDisplay;

function setup() {
  createCanvas(600, 300);

  // Create TimeDisplay objects at different x positions
  hourDisplay = new TimeDisplay(120, 150, "HOURS");
  minuteDisplay = new TimeDisplay(280, 150, "MINUTES");
  secondDisplay = new TimeDisplay(440, 150, "SECONDS");
}

function draw() {
  background(30);

  // Get current time
  let h = hour();
  let m = minute();
  let s = second();

  // Update each display with current values
  hourDisplay.update(h);
  minuteDisplay.update(m);
  secondDisplay.update(s);

  // Display each time component
  hourDisplay.display();
  minuteDisplay.display();
  secondDisplay.display();

  // Draw title
  fill(100);
  textSize(24);
  textAlign(CENTER, TOP);
  text("Simple Clock", width / 2, 20);
}
