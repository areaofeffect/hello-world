import React, { useState } from 'react';
import { fetch } from 'meteor/fetch';

export const Hello = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const loadImage = async (url = '', data = {}) => {
    console.log('the data sent to the api ', data);
    const response = await fetch(url+'?'+new URLSearchParams(data));
    const imageData = await response.json();

    console.log('the image data returned from the api: ', imageData);
    setImageSrc(imageData.url);
    setImageTitle(imageData.explanation);
  }

  const getImage = () => {
    const loadImageAsync = Meteor.wrapAsync(loadImage);
    // change the date to see different images
    loadImageAsync('https://api.nasa.gov/planetary/apod', {api_key: "iyuaalFBShG6fxUdb0muEx616dsZEdkTIFqQ9iV0", date:"2018-10-20"})   
  }

  return (
    <div>
      <button onClick={getImage}>Click Me To Load An Image</button>
      {imageTitle && <p>{imageTitle}</p>}
      {imageSrc && <img src={imageSrc} />}
    </div>
  );
};
