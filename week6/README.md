# Custom Pixel Displays & Classes

# SVA IxD Week 6

## Review and Discussion of Week 5

### Scope and Organizing Code

- Lexical vs Dynamic Scope
- Levels of Scope (Expression, Block, Function, File, Module, Global)
- Writing modular, reusable code
- Using libraries and packages

---

## Today's Focus: Loops, Nested Loops, and Classes

Building on what we learned about loops, we'll explore:
- How nested loops create grids and patterns
- Manipulating pixels using loop iteration
- Organizing code with classes
- Creating visual systems with reusable components

---

## Understanding Nested Loops

### Single Loop - A Line

```javascript
for (let x = 0; x < width; x += 20) {
  rect(x, 100, 15, 15);
}
```

### Nested Loop - A Grid

```javascript
for (let y = 0; y < height; y += 20) {
  for (let x = 0; x < width; x += 20) {
    rect(x, y, 15, 15);
  }
}
```

The outer loop controls rows (y), the inner loop controls columns (x).

---

## Custom Pixel Displays

### What is a Pixel Display?

A pixel display breaks down an image or video into a grid of pixels using nested loops. Each pixel can be:
- Analyzed for color and brightness
- Replaced with custom graphics
- Manipulated to create visual effects

### The Pixel Array in P5.js

Every image and video has a `pixels[]` array with RGBA values:

```javascript
capture.loadPixels(); // Load pixel data first

// Each pixel has 4 values: Red, Green, Blue, Alpha
let offset = (y * capture.width + x) * 4;

let r = capture.pixels[offset];     // Red
let g = capture.pixels[offset + 1]; // Green
let b = capture.pixels[offset + 2]; // Blue
let a = capture.pixels[offset + 3]; // Alpha
```

### Why the formula `(y * width + x) * 4`?

The pixels array is 1-dimensional, but images are 2-dimensional:
1. Skip past all complete rows: `y * width`
2. Add the column position: `+ x`
3. Multiply by 4 for RGBA: `* 4`

---

## Example 1: Basic Custom Pixel Display

See `week6/examples/p5-custom-pixel`

### Key Concepts:

```javascript
let pixelSize = 40;

// Nested loop to create grid
for (let y = 0; y < capture.height; y += pixelSize) {
  for (let x = 0; x < capture.width; x += pixelSize) {
    // Calculate offset to sample pixel
    let offset = (y * capture.width + x) * 4;

    // Get color
    let c = color(
      capture.pixels[offset],
      capture.pixels[offset + 1],
      capture.pixels[offset + 2]
    );

    // Scale position to canvas
    let xpos = (x / capture.width) * width;
    let ypos = (y / capture.height) * height;

    // Draw custom pixel
    fill(c);
    rect(xpos, ypos, pixelSize, pixelSize);
  }
}
```

---

## Example 2: Advanced Pixel Display

See `week6/examples/p5-custom-pixel-2`

### Advanced Techniques:

**Converting to Greyscale**
```javascript
let r = capture.pixels[offset];
let g = capture.pixels[offset + 1];
let b = capture.pixels[offset + 2];

let brightness = (r + g + b) / 3;
```

**Converting to HSB (Hue, Saturation, Brightness)**
```javascript
let brightness = (r + g + b) / 3;
let hsbValue = map(brightness, 0, 255, 0, 360);
```

**Replacing Pixels with Custom Images**
```javascript
// Map hue value (0-360) to color categories
if (hsbValue > 0 && hsbValue < 45) {
  image(red, xpos, ypos);
} else if (hsbValue > 45 && hsbValue < 90) {
  image(orange, xpos, ypos);
}
```

---

## Introducing Classes

### Why Use Classes?

- Encapsulate related data and functions
- Create reusable components
- Better code organization
- Easier to maintain and extend

### Basic Class Structure

```javascript
class CustomPixel {
  // Constructor - runs when object is created
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(255);
  }

  // Method to update pixel
  update(newColor) {
    this.color = newColor;
  }

  // Method to display pixel
  display() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }
}

// Creating an instance
let myPixel = new CustomPixel(100, 100, 20);
```

---

## Example 3: Simple Clock with Classes

See `week6/examples/p5-simple-clock`

A straightforward example of displaying time using classes.

### TimeDisplay Class:

```javascript
class TimeDisplay {
  constructor(x, y, label) {
    this.x = x;
    this.y = y;
    this.label = label;
    this.value = 0;
  }

  update(newValue) {
    this.value = newValue;
  }

  display() {
    // Draw label and value
    text(this.label, this.x, this.y - 40);
    text(nf(this.value, 2), this.x, this.y);
  }
}

// In draw()
let h = hour();
let m = minute();
let s = second();

hourDisplay.update(h);
minuteDisplay.update(m);
secondDisplay.update(s);

hourDisplay.display();
minuteDisplay.display();
secondDisplay.display();
```

---

## Performance Tips

### Optimize Pixel Processing

```javascript
// Use pixelDensity(1) for better performance
pixelDensity(1);

// Reduce video resolution
let scaleValue = 20;
capture.size(1920 / scaleValue, 1080 / scaleValue);

// Increase grid size to sample fewer pixels
let gridSize = 2; // Skip every other pixel
```

### Video Mirroring

```javascript
// Flip video horizontally (like Zoom)
translate(width, 0);
scale(-1, 1);
```

---

## Assignment: Custom Pixel Display or Clock

Choose **one** of the following:

### Option 1: Custom Pixel Display
Create a webcam-based pixel display that:
- Uses nested loops to create a grid
- Samples and displays pixel colors
- Implements your own visual style (shapes, colors, sizes)
- Uses classes to organize at least one component

### Option 2: Time Display
Build a visual clock that:
- Displays hours, minutes, and seconds
- Uses a class for at least one component
- Updates in real-time
- Has an interesting visual design

### Requirements:
1. Demonstrate understanding of nested loops
2. Use at least one class to organize your code
3. Comment your code to explain key concepts
4. Make it visually interesting

### Bonus Challenges:
- Add color mode switching (RGB/HSB/Greyscale)
- Create multiple visual modes
- Use loops creatively for patterns or effects
- Combine both concepts (pixel clock!)

---

## Resources

### P5.js Reference
- [loadPixels()](https://p5js.org/search/?term=loadPixels)
- [pixels[]](https://p5js.org/search/?term=pixels)
- [createCapture()](https://p5js.org/search/?term=createCapture)
- [hour(), minute(), second()](https://p5js.org/search/?term=hour)

### JavaScript Classes
- [Classes (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [P5.js Objects Tutorial](https://p5js.org/examples/objects-objects.html)

### Video Tutorials
- [Coding Train: Nested Loops](https://www.youtube.com/watch?v=H7frvcAHXps)
- [Coding Train: Pixels](https://www.youtube.com/watch?v=nMUMZ5YRxHI)
- [Coding Train: Classes](https://www.youtube.com/watch?v=T-HGdc8L-7w)

---

## Examples in This Repository

1. `week6/examples/p5-custom-pixel` - Basic pixel display
2. `week6/examples/p5-custom-pixel-2` - Advanced pixel effects with images
3. `week6/examples/p5-simple-clock` - Simple clock using classes (NEW)

---

## Next Week Preview

Week 7: Interactivity and Debugging
- Mouse and keyboard input
- Webcam interaction
- Chrome Developer Tools
- Debugging strategies
