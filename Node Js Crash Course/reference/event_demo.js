const EventEmitter = require("events");

//Create Class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Create Event Listener
myEmitter.on("event", function () {
  console.log("Event Fired");
});

//Init Event
myEmitter.emit("event");
