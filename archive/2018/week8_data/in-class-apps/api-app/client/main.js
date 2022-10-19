import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.imageSrc = new ReactiveVar("");
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  imageSrc() {
    return Template.instance().imageSrc.get();
  }
});

Template.hello.events({
  'click button'(event, instance) {

    HTTP.call('GET', 'https://api.nasa.gov/planetary/apod', {
      params: { api_key: "iyuaalFBShG6fxUdb0muEx616dsZEdkTIFqQ9iV0", date:"2018-10-20" }
    }, (error, result) => {
      if (!error) {
        console.log(result.data.url);
        instance.imageSrc.set(result.data.url);
      }
    });
    
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
