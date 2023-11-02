const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}

// Create an instance of the custom event emitter
const myEmitter = new MyEmitter();

// Register an event handler for a custom event called 'customEvent'
myEmitter.on('customEvent', (arg1, arg2) => {
  console.log(`Custom event handler called with arguments: ${arg1} and ${arg2}`);
});

// Emit the 'customEvent' event with some data
myEmitter.emit('customEvent', 'Hello', 'World');

// Register another event handler for the 'customEvent'
myEmitter.on('customEvent', () => {
  console.log('Another custom event handler called');
});

// Emit the 'customEvent' event again
myEmitter.emit('customEvent', 'Node.js', 'Events');
