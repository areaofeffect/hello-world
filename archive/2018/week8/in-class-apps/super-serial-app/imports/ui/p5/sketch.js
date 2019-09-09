// pass in p5.js as function argument p5
export default function sketch (p5) {
  // set the intial ascii variable
  let ascii = {text:""};
  // set variables for a grid of 100 possible values
  let gridIndex = 0;
  let gridMax = 99;
  let gridPos = [];
  // set the initial random text color
  let r = p5.random(255);
  let g = p5.random(255);
  let b = p5.random(255);

  p5.setup = function () {
    // standard p5 setup code, note p5. because we passed it in above
    p5.createCanvas(600, 400);
    p5.background(255);
    p5.textSize(30);

    // make a grid of x,y positions based on our canvas size
    for (var a = 0; a < p5.width; a += 60) {
      for (var b = 0; b < p5.height; b += 40) {
        gridPos.push({x:a,y:b});
      }
    }
  };

  p5.draw = function () {
    // fill the background of each square with white before drawing ascii chars
    p5.fill(255);
    p5.noStroke()
    p5.rect(gridPos[gridIndex].x, gridPos[gridIndex].y, 60, 40);
    // draw the incoming ascii from serial
    p5.fill(r, g, b);
    p5.text(ascii.text, gridPos[gridIndex].x + 20, gridPos[gridIndex].y + 30);
  };

  // this special function receives data from App.jsx withTracker
  p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.ascii){
      // get the new ascii object
      ascii = props.ascii;
      // increment the grid position
      if (gridIndex < gridMax) {
        gridIndex++;
      } else {
        gridIndex = 0;
      }
      // get a new random color
      r = p5.random(255);
      g = p5.random(255);
      b = p5.random(255);
    }
  };
};