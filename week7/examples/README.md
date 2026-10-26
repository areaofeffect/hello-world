# Week 7 Examples: Programming Interactivity

p5.js sketches for the interactivity week, in the order they appear in the slides. Each folder is self-contained: open its `index.html` in a browser (or with Live Server). p5 is vendored in each `libraries/` folder, so nothing needs to be installed.

Every example has a Fullscreen button, a 600x400 canvas by default, and a `windowResized()` that fits the canvas to the screen. Every example is also hosted live at [hello-world-week7.s3-website-us-east-1.amazonaws.com/examples/](http://hello-world-week7.s3-website-us-east-1.amazonaws.com/examples/p5/mouse-position/) (same folder names as below). Run `./deploy-slides.sh 7` from the repo root to redeploy after editing.

## Mouse

| Example | What it shows |
| --- | --- |
| [mouse-position](p5/mouse-position) | `mouseX`, `mouseY`, and the `mouseMoved()` callback |
| [mouse-mapping](p5/mouse-mapping) | `map()` the mouse to rotation and scale instead of position |
| [simple-drawing-app](p5/simple-drawing-app) | `mouseDragged()` with `pmouseX`, `pmouseY` |
| [button-rectangular](p5/button-rectangular) | Is the mouse inside a rectangle? Four comparisons |
| [button-circular](p5/button-circular) | Is the mouse inside a circle? `dist()` against the radius |
| [simple-draggable](p5/simple-draggable) | Click and drag an object, keeping the click offset (Dan Shiffman) |
| [screen-vs-world](p5/screen-vs-world) | A pannable, zoomable world with a button in it. Shows why `mouseX`/`mouseY` must be converted to world coordinates before a hit test |

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

## Phones

p5 treats a finger like the mouse, so the mouse examples above also work on a phone. These two are made for one. Open them on your phone from the hosted link, or from your laptop's IP and port while on the same wifi. Tilt is the exception: both of those are `http://`, and phones only share the tilt sensor with `https://` pages. Paste the sketch into the [p5 web editor](https://editor.p5js.org) (which is `https://`) and open its share link on your phone.

| Example | What it shows |
| --- | --- |
| [touch-button](p5-mobile/touch-button) | A button you tap. `mousePressed()` and `mouseReleased()` fire for fingers too, and `touches` lists every finger on the screen |
| [touch-rotation](p5-mobile/touch-rotation) | Tilt the phone to roll a ball with `rotationX` and `rotationY`. Needs an `https://` page, and iPhones need a tap on "Enable tilt" first. On a laptop the mouse stands in for the tilt |

### Tilt from your own laptop: HTTPS with Live Server

Live Server can serve `https://` too, so tilt works from your laptop's IP. It takes a few minutes to set up, once. These steps are for a Mac.

1. Install [mkcert](https://github.com/FiloSottile/mkcert), which makes certificates your own devices trust:

   ```sh
   brew install mkcert
   mkcert -install
   ```

2. Find your wifi IP with `ipconfig getifaddr en0`. Then, in the folder you open in VS Code, make a certificate for it:

   ```sh
   mkdir -p .vscode/certs
   mkcert -cert-file .vscode/certs/live-server.pem -key-file .vscode/certs/live-server-key.pem localhost 127.0.0.1 <your-wifi-ip>
   ```

3. Turn on HTTPS in `.vscode/settings.json` in that same folder. The paths must be absolute:

   ```json
   "liveServer.settings.https": {
       "enable": true,
       "cert": "/full/path/to/.vscode/certs/live-server.pem",
       "key": "/full/path/to/.vscode/certs/live-server-key.pem",
       "passphrase": ""
   }
   ```

4. Stop and restart Live Server. The address now starts with `https://`.
5. Make your phone trust the certificate. Run `open "$(mkcert -CAROOT)"` and AirDrop **`rootCA.pem`** to the phone. Never send `rootCA-key.pem`, which would let anyone fake secure websites on your devices.
   - iPhone: Settings, Profile Downloaded, Install. Then Settings, General, About, Certificate Trust Settings, and switch it on. Until you do, Safari says "Not Secure".
   - Android: Settings, Security, Encryption & credentials, Install a certificate, CA certificate.
6. On the phone, open `https://<your-wifi-ip>:<port>/...`.

Gotchas:

- VS Code only reads `.vscode/settings.json` from the folder it has open. If you open `week7` instead of the whole repo, the settings go in `week7/.vscode/`.
- On a different wifi your IP changes. Repeat step 2 with the new IP.

## Plain JavaScript (no p5)

[JavaScript/js-functions](JavaScript/js-functions) is a work-in-progress port of the week 3 Deep Deep Forest game to HTML, CSS and plain JavaScript. It shows the same ideas (functions, an object for the player, buttons that call functions) without a canvas.

## Common problems

- **Images do not load.** Paths are relative to `index.html`. `loadImage("img/cat.jpg")` means there is an `img` folder next to `index.html`. Check the Network tab in the browser console for a 404.
- **Arrow keys scroll the page.** Add `return false;` at the end of `keyPressed()`.
- **Nothing draws.** `background()` clears the canvas. Anything drawn before it in `draw()` is wiped before you see it.
- **Dragging on a phone scrolls the page instead of drawing.** Add `touch-action: none;` to `canvas` in `style.css`. See `simple-drawing-app` for the full fix, which also stops a tap from counting twice.
- **Tilt does nothing.** The motion sensor only works on `https://` pages (or `localhost`), and iPhones only share it after the user taps a button. See `touch-rotation`.
- **Sound does not start.** Browsers only allow audio after the user clicks or presses a key. Start oscillators inside `mousePressed()` or `keyPressed()`.
