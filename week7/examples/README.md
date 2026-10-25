# Week 7 Examples: Programming Interactivity

p5.js sketches for the interactivity week, in the order they appear in the slides. Each folder is self-contained: open its `index.html` in a browser (or with Live Server). p5 is vendored in each `libraries/` folder, so nothing needs to be installed.

Every example is also hosted live at [hello-world-week7.s3-website-us-east-1.amazonaws.com/examples/](http://hello-world-week7.s3-website-us-east-1.amazonaws.com/examples/p5/mouse-position/) (same folder names as below). Run `./deploy-slides.sh 7` from the repo root to redeploy after editing.

## Mouse

| Example | What it shows |
| --- | --- |
| [mouse-position](p5/mouse-position) | `mouseX`, `mouseY`, and the `mouseMoved()` callback |
| [mouse-mapping](p5/mouse-mapping) | `map()` the mouse to rotation and scale instead of position |
| [simple-drawing-app](p5/simple-drawing-app) | `mouseDragged()` with `pmouseX`, `pmouseY` |
| [button-rectangular](p5/button-rectangular) | Is the mouse inside a rectangle? Four comparisons |
| [button-circular](p5/button-circular) | Is the mouse inside a circle? `dist()` against the radius |
| [simple-draggable](p5/simple-draggable) | Click and drag an object, keeping the click offset (Dan Shiffman) |

## Keyboard

| Example | What it shows |
| --- | --- |
| [keyboard-movement](p5/keyboard-movement) | Arrow keys move a circle with `keyCode` in `keyPressed()` |
| [keyboard-movement-smoothing](p5/keyboard-movement-smoothing) | Same idea with a target position and easing |
| [keyboard-movement-objects](p5/keyboard-movement-objects) | The player becomes a `class` with momentum and wall collisions |

## Images

| Example | What it shows |
| --- | --- |
| [images-load](p5/images-load) | `preload()`, `loadImage()`, `image()` |
| [images-cursor](p5/images-cursor) | An image that follows the mouse (custom cursor) |
| [images-crossfade](p5/images-crossfade) | `tint()` with an alpha mapped from the mouse to crossfade two images |

## Putting it together

| Example | What it shows |
| --- | --- |
| [almost-pong](p5/almost-pong) | A deliberately unfinished pong: ball, paddle, lives, win and lose. Finish it. |
| [one-button-golf-like](p5/one-button-golf-like) | The reference for the assignment. One key (space) drives a state machine: angle, power, launch, done. Also shows a debug overlay and `p5.Oscillator` sound. |

## Plain JavaScript (no p5)

[JavaScript/js-functions](JavaScript/js-functions) is a work-in-progress port of the week 3 Deep Deep Forest game to HTML, CSS and plain JavaScript. It shows the same ideas (functions, an object for the player, buttons that call functions) without a canvas.

## Common problems

- **Images do not load.** Paths are relative to `index.html`. `loadImage("img/cat.jpg")` means there is an `img` folder next to `index.html`. Check the Network tab in the browser console for a 404.
- **Arrow keys scroll the page.** Add `return false;` at the end of `keyPressed()`.
- **Nothing draws.** `background()` clears the canvas. Anything drawn before it in `draw()` is wiped before you see it.
- **Sound does not start.** Browsers only allow audio after the user clicks or presses a key. Start oscillators inside `mousePressed()` or `keyPressed()`.
