var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem144221';  // fill in your serial port name here
var inData;
var xPos = 0;                           // x position of the graph

function setup() {
 createCanvas(400, 300);
 background(0x08, 0x16, 0x40);

 serial = new p5.SerialPort(); // make a new instance of the serialport library
 serial.on('list', printList); // set a callback function for the serialport list event
 serial.on('data', serialEvent);     // callback for when new data arrives
 
 var options = { baudrate: 9600}; // change the data rate to whatever you wish
 serial.open(portName, options);
}

function draw() {
  graphData(inData);
}

function graphData(newData) {
  // map the range of the input to the window height:
  var yPos = map(newData, 0, 255, 0, height);
  // draw the line in a pretty color:
  stroke(0xA8, 0xD9, 0xA7);
  line(xPos, height, xPos, height - yPos);
  // at the edge of the screen, go back to the beginning:
  if (xPos >= width) {
    xPos = 0;
    // clear the screen by resetting the background:
    background(0x08, 0x16, 0x40);
  } else {
    // increment the horizontal position for the next reading:
    xPos++;
  }
}


function serialEvent() {
  // retreive value from serial port
  inData = Number(serial.read());
}


// print list of ports for debugging
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
  print(i + " " + portList[i]);
   }
}

