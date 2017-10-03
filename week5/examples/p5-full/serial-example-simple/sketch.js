var serial;	// variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem144221';  // fill in your serial port name here
var inData;

function setup() {
 createCanvas(400, 300);
 
 serial = new p5.SerialPort(); 		// make a new instance of the serialport library
 serial.on('list', printList); 		// set a callback function for the serialport list event
 serial.on('data', serialEvent);    // callback for when new data arrives
 
 // change the data rate to whatever you wish
 var options = { baudrate: 9600};
 serial.open(portName, options);

}

function draw() {
  background(0);
  fill(255);

  // print out the sensor value
  text("sensor value: " + inData, 30, 30);
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

