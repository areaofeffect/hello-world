import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Asteroids } from '../imports/api/asteroids.js'



Meteor.publish('asteroids', function asteroidsPublication() {
  return Asteroids.find();
});

Meteor.methods({
  loadAsteroids: function() {
    console.log("loadAsteroids");
    HTTP.call('GET', 'https://api.nasa.gov/neo/rest/v1/feed', {
      params: { api_key: "iyuaalFBShG6fxUdb0muEx616dsZEdkTIFqQ9iV0", start_date:"2017-10-17", end_date:"2017-10-24" }
    }, (error, result) => {
      console.log(error);
      if (!error) {
        var data = result.data;
        console.log(data["near_earth_objects"])
        for (var dateKey in data["near_earth_objects"]) {
          for (var i = 0; i < data["near_earth_objects"][dateKey].length; i++) {
            console.log(data["near_earth_objects"][dateKey][i].name);
            Asteroids.insert({text:data["near_earth_objects"][dateKey][i].name, date:new Date()})
          }
        }
      }
    });
  }
})


Meteor.startup(() => {
  // code to run on server at startup
});
