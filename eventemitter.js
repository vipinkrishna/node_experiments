var events = require("events");
var eventEmitter = new events.EventEmitter();

var eventHandlerFn = function () {
    console.log("I just hear a SCREAM!");
}

eventEmitter.on("scream", eventHandlerFn);
eventEmitter.emit("scream");