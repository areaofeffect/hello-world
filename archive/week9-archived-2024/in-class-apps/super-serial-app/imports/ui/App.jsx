import React, { useState } from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";
import { Ascii } from '../api/ascii.js';
import sketch from './p5/sketch.js';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {
  const { ascii, isLoading } = useTracker(() => {
    const noDataAvailable = { ascii: {text: ''} };
    const handler = Meteor.subscribe('ascii');
    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }
    const ascii = Ascii.find({}, { sort: { updatedAt: -1 } }).fetch()[0]; 
    return { ascii };
  });

  return (
    <div className="container">
    
      <h1>super-serial-app</h1>
      <p>In the Arduino IDE, run File > Examples > Communication > ASCIITable.<br />Update the path to your serial port on line 63 of /server/main.js. </p>
      <div className="content">
        <p>This is HTML representation of the serial coming through: {ascii.text}</p>
      </div>
      <p>Below in the ReactP5Wrapper the same serial data is displayed.</p>
      {/*pass the p5 sktech file into the React wrapper
      also pass the ascii prop which will updated based on withTracker above*/}
      <ReactP5Wrapper sketch={sketch} ascii={ascii} />
    </div>
  );
}

