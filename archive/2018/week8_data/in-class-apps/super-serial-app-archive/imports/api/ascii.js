import { Mongo } from 'meteor/mongo';
 
export const Ascii = new Mongo.Collection('ascii');
import { check } from 'meteor/check';


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('ascii', function asciiPublication() {
    return Ascii.find({});
  });
}

// http://docs.meteor.com/api/collections.html#Mongo-Collection-upsert
Meteor.methods({
  'ascii.upsert'(text, dec, hex, oct, bin) {
    check(text, String);
 
    Ascii.upsert({
      text: text
    },
    {
      $set: {
        text: text,
        dec: dec,
        hex: hex,
        oct: oct,
        bin: bin,
        updatedAt: new Date(),
      }
    });
  }
})