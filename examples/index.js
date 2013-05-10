var stackparser = require('../index');

var err = new Error();

var stackrows = stackparser(err);

console.log(err.stack); // Will output stack as string
console.log(stackrows); // Will output stack as array with a StackRow object for each line.
// Example: { "method": "somemethod", "fileName": "/path/to/file.js", lineNumber: 5 }