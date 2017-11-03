import { Meteor } from 'meteor/meteor';
import SerialPort from 'serialport';
import ascii from '../imports/api/ascii.js'
import { connect } from 'mqtt/lib/connect';

export const config = {
  mqttHost: "mqtt://127.0.0.1",
  mqttPort: 1883
};

export const client = connect(config.mqttHost);

client.on("connect", function() {
  console.log("---- mqtt client connected ----");
})


const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

// parse the data from serial into meaningful objects
function addAscii(data) {
  console.log(data);
  // split into an array 
  let dataArr  = data.split(",");
  // console.log(dataArr);


  // ignore [ 'ASCII Table ~ Character Map\r' ]
  if (dataArr.length > 1) {


    let decIndex = 1;
    let hexIndex = 2;
    let octIndex = 3;
    let binIndex = 4;
    
    // the first index is the text
    let text = dataArr[0];
    
    // a comma requires a special update since we are splting on commas in line 12
    if (dataArr[0] == '' && dataArr[1] == '') {
      //console.log("it's a comma!")
      text = ",";
      decIndex = 2;
      hexIndex = 3;
      octIndex = 4;
      binIndex = 5;
    } 

    // the second element is a key/value pair for dec
    let decArr = dataArr[decIndex].trim().split(":");
    let decKey = decArr[0]
    let decValue = decArr[1]

    //hex
    let hexArr = dataArr[hexIndex].trim().split(":");
    // get the keys and values and trim whitespace
    let hexKey = hexArr[0]
    let hexValue = hexArr[1]

    //oct
    let octArr = dataArr[octIndex].trim().split(":");
    // get the keys and values and trim whitespace
    let octKey = octArr[0]
    let octValue = octArr[1]

    //bin
    let binArr = dataArr[binIndex].trim().split(":");
    // get the keys and values and trim whitespace
    let binKey = binArr[0]
    let binValue = binArr[1]

    // console.log(text, decValue, hexValue, octValue, binValue);

    // upsert into the database so that the front end will update each time you press the Arduino reset button
    Meteor.call('ascii.upsert', text, decValue, hexValue, octValue, binValue);
    // send the character over mqtt
    client.publish("ascii", text);
  }
}

var port = new SerialPort('/dev/cu.usbmodem1421', {
  baudRate: 9600
});
port.pipe(parser);
// our callback function must be wrapped in Meteor.bindEnvironment to avoid Fiber errors
parser.on('data', Meteor.bindEnvironment(addAscii));


Meteor.startup(() => {
  // code to run on server at startup
});
