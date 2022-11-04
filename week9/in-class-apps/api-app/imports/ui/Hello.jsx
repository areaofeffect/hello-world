import React, { useState } from 'react';
import { fetch, Headers, Request, Response } from 'meteor/fetch';

export const Hello = () => {
  const [imageSrc, setImageSrc] = useState(0);

  async function loadImage (url, data) {
    try {
      const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          params: data
      });
      const data = await response.json();
      return response(null, data);
    } catch (err) {
      return response(err, null);
    } 
  }

  const loadImageCall = Meteor.wrapAsync(loadImage);
  const results = loadImageCall('https://api.nasa.gov/planetary/apod', {api_key: "iyuaalFBShG6fxUdb0muEx616dsZEdkTIFqQ9iV0", date:"2018-10-20"});


  return (
    <div>
      <button onClick={loadImageCall}>Click Me To Load An Image</button>
    </div>
  );
};
