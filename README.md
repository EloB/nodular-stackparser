nodular-stackparser
===================

A node.js error stack parser

This module doesn't support Windows yet.

Installation
------

```
$ npm install nodular-stackparser
```

Quick Start
------

Example:
```javascript
var stackparser = require('nodular-stackparser');

var err = new Error();

var stackrows = stackparser(err);

console.log(err.stack); // Will output stack as string
console.log(stackrows); // Will output stack as array with a StackRow object for each line.
// Example: { "method": "somemethod", "fileName": "/path/to/file.js", lineNumber: 5 }
```

Social
------

- Follow [ollebroms](https://twitter.com/ollebroms) on twitter.

License
------

(The MIT License)

Copyright (c) 2013-2013 Olle "EloB" Bröms <olle.broms@ewebbyran.se>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.