var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function deviceMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}