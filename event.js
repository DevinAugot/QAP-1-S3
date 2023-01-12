// Author: Devin Augot
// Date: Jan 12, 2023

// The event object or also known as a common-core module is for signaling that an event or action has happend within your code. you can also use this to execute functions everytime those events are triggered below is an example.

// setting the events class to enable the event module
var events = require("events");

// initalizing the event emitter object
var eventEmitter = new events.EventEmitter();

// putting the event emitter to use using two arguments one being a callback function which console logs
eventEmitter.on("Event", () => {
  console.log("Event Triggered, Congrats!");
});

// raise an event
eventEmitter.emit("Event");
