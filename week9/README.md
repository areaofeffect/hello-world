# Week 9: Application State & State Machines

## Overview
This week introduces the concept of **application state** - one of the most important concepts in interactive programming. Students will learn how to manage different modes and conditions in their programs using state machines, building on their experience with Python text adventures and P5.js interactive sketches.

## Learning Objectives
By the end of this week, students will be able to:
- Understand what application state means in programming
- Identify different states in games and applications they use daily
- Implement a state machine pattern in P5.js
- Manage state transitions based on user input and conditions
- Use state to control program flow and visual presentation
- Debug state-based programs by tracking state changes

## Key Concepts

### What is State?
**State** represents the current condition or mode of a program at any given moment. Think of it as the program's "memory" of where it is and what it should be doing.

### State Machines
A **state machine** is a design pattern with these properties:
1. The program can only be in ONE state at a time
2. Each state has specific behaviors and visuals
3. States transition to other states based on events
4. Transitions follow defined rules

### Common State Examples
- **Games**: MENU → PLAYING → PAUSED → GAMEOVER
- **Apps**: LOGIN → FEED → PROFILE → SETTINGS
- **Devices**: OFF → STARTING → READY → RUNNING → SHUTTING_DOWN

## Connection to Previous Learning

### Python Choose Your Own Adventure
Students already used state management in their Python text adventures:
```python
current_scene = "forest"

if current_scene == "forest":
    # Show forest description
    # Handle forest choices
elif current_scene == "cave":
    # Show cave description
    # Handle cave choices
```

This same pattern extends to P5.js with visual feedback!

### P5.js Interactive Sketches
Previous weeks covered:
- Mouse and keyboard interaction
- Conditionals for behavior
- Objects and classes
- Animation and visual feedback

State machines combine all these skills into organized, complex programs.

## Slides
[View Week 9 Slides](slides/index.html)

## Examples

### 1. Virtual Creature ([Demo](examples/p5/virtual-creature/))
An interactive creature with multiple moods/states based on its needs:
- **Stats**: hunger, energy, happiness (decay over time)
- **States**: HAPPY, HUNGRY, TIRED, BORED, WORRIED, EXCITED
- **Interactions**: Feed, Rest, Play (click the creature)
- **Visual Feedback**: Color, facial expression, animation change with state

**Key Learning Points:**
- Complex state determined by multiple variables
- Priority-based state transitions
- State affects both appearance and behavior
- User interaction changes state indirectly (through stats)

**Code Highlights:**
```javascript
updateMood() {
  // Priority-based state machine
  if (this.hunger < 20) {
    this.mood = "HUNGRY";
  } else if (this.energy < 20) {
    this.mood = "TIRED";
  } else if (this.happiness < 25) {
    this.mood = "BORED";
  } else {
    this.mood = "HAPPY";
  }
}
```

### 2. State Machine Game ([Demo](examples/p5/state-machine-game/))
A simple clicker game demonstrating the classic three-state pattern:
- **States**: MENU, PLAYING, GAMEOVER
- **Transitions**:
  - SPACE key: MENU → PLAYING
  - Timer ends: PLAYING → GAMEOVER
  - SPACE key: GAMEOVER → MENU
- **State-specific behavior**: Different rendering and input handling per state

**Key Learning Points:**
- Clear separation of states
- Explicit state transitions
- Different draw functions per state
- State controls what inputs do

**Code Highlights:**
```javascript
let gameState = "MENU";

function draw() {
  if (gameState === "MENU") {
    drawMenu();
  } else if (gameState === "PLAYING") {
    drawPlaying();
  } else if (gameState === "GAMEOVER") {
    drawGameOver();
  }
}

function keyPressed() {
  if (key === ' ') {
    if (gameState === "MENU") {
      gameState = "PLAYING";
      // Initialize game variables
    } else if (gameState === "GAMEOVER") {
      gameState = "MENU";
    }
  }
}
```

## In-Class Activities

### Activity 1: State Identification (15 min)
- Students identify states in familiar games/apps
- Draw state diagrams on paper
- Discuss state transitions and what triggers them

### Activity 2: Simple State Toggle (20 min)
Create a two-state sketch:
- Click to toggle between DAY and NIGHT
- Different colors/visuals for each state
- Practice state transitions

### Activity 3: Traffic Light (25 min)
Implement a traffic light with automatic state changes:
- States: RED, YELLOW, GREEN
- Automatic transitions with timers
- Optional: Add pedestrian crossing button

### Activity 4: Explore Examples (30 min)
- Run and modify the virtual creature example
- Experiment with the state machine game
- Discuss how state machines organize complex behavior

## Applying State Machines to Your Project

Now that you're working on individual projects, consider where state machines might help organize your code:

### Questions to Ask About Your Project

**Does your project have different modes or screens?**
- Menu vs gameplay
- Different tools or editing modes
- Levels or scenes
- Intro/playing/ending sequences

**Does your project have objects with changing behavior?**
- Characters with different moods or actions
- UI elements that toggle between states
- Game objects with lifecycle stages (spawning → active → dying)
- Interactive elements with multiple response types

**Does your project respond to conditions over time?**
- Health/energy systems that affect behavior
- Environmental changes (day/night, weather)
- Difficulty that adjusts based on performance
- Tutorial vs normal gameplay

### How State Machines Can Help

**Organization:** Instead of many nested if-statements, state machines give you clear structure:
```javascript
if (gameState === "PLAYING") {
  // All gameplay logic here
} else if (gameState === "PAUSED") {
  // All pause logic here
}
```

**Debugging:** When something goes wrong, you can see exactly which state you're in and what should be happening.

**Collaboration:** If working with others, state machines make it clear what modes exist and how they transition.

**Extension:** Adding new features becomes easier - need a settings menu? Add a new state!

### Where to Start

1. **Identify 2-3 states** your project already has (even implicitly)
2. **Draw a state diagram** showing how states connect
3. **Implement one state** and make sure it works
4. **Add transitions** between states one at a time
5. **Refine** by adding more states or refactoring existing code

## Tips for Success

### Planning Your State Machine
1. **Draw a diagram first**: Map out all states and transitions on paper
2. **Start simple**: Get 2-3 states working before adding more
3. **Use clear names**: ALL_CAPS for state names makes them easy to spot
4. **One state at a time**: Verify you can only be in one state

### Debugging State Machines
```javascript
// Add to draw() to see current state
console.log("Current state:", gameState);

// Or display on canvas
fill(0);
text("State: " + gameState, 10, 20);
```

### Organizing Your Code
- Create separate draw functions for each state (`drawMenu()`, `drawPlaying()`, etc.)
- Handle state transitions in one place (like `keyPressed()`)
- Initialize/reset variables when entering a state
- Comment your state transition logic clearly

### Common Pitfalls
- **Multiple states at once**: Make sure transitions are clean and exclusive
- **Forgetting to reset**: Initialize variables when entering a state
- **No way back**: Ensure all states have a way to transition out
- **Hardcoded values**: Use variables for timing and thresholds

## Resources

### P5.js References
- [Variables](https://p5js.org/reference/#/p5/variables)
- [Conditionals (if/else)](https://p5js.org/examples/control-conditionals-1.html)
- [Classes](https://p5js.org/reference/#/p5/class)
- [constrain()](https://p5js.org/reference/#/p5/constrain)
- [map()](https://p5js.org/reference/#/p5/map)

### State Machine Patterns
- [Game Programming Patterns: State](http://gameprogrammingpatterns.com/state.html)
- [State Machines in Games](https://www.raywenderlich.com/5428806-state-pattern-using-swift)

### Inspiration
- Tamagotchi virtual pets
- [Neko](https://en.wikipedia.org/wiki/Neko_(software)) - classic desktop pet
- Cookie Clicker
- Classic arcade game state flows

---

Understanding state machines is foundational for building any interactive application. As you work on your individual projects, don't hesitate to ask questions about how state machines might help solve specific organizational challenges you encounter!
