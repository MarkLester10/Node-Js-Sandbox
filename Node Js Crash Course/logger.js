const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(message) {
    //Call Event
    this.emit("message", { id: uuid.v4(), message });
  }
}
// module.exports = Logger;

const logger = new Logger();

logger.on("message", (data) => {
  console.log("Called Listener:", data);
});

logger.log("Hello From Logger");
logger.log("Hi From Logger");
logger.log("Bonju From Logger");
