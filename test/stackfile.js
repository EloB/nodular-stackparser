var should = require('should');

describe('StackRow', function() {
	var StackRow = require('../index').StackRow;
	
	describe('.isNative', function() {
		it('should return true or false if the file is a native node.js file', function() {
			var stackrow = new StackRow('    at Context.<anonymous> (/node.js/nodular/nodular-stackparser/test/stackfile.js:8:10)');
			
			stackrow.fileName = 'timer.js';
			stackrow.isNative().should.be.true;
			
			stackrow.fileName = '/something/test.js';
			stackrow.isNative().should.be.false;
		});
	});
	
	it('should parse a line from the error stack', function() {
		var tests = {
			'    at Context.<anonymous> (/node.js/nodular/nodular-stackparser/test/stackfile.js:8:10)': {
				method: 'Context.<anonymous>',
				fileName: '/node.js/nodular/nodular-stackparser/test/stackfile.js',
				lineNumber: 8
			},
			'    at Test.Runnable.run (/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runnable.js:213:32)': {
				method: 'Test.Runnable.run',
				fileName: '/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runnable.js',
				lineNumber: 213
			},
			'    at Runner.runTest (/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js:351:10)': {
				method: 'Runner.runTest',
				fileName: '/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js',
				lineNumber: 351
			},
			'    at /node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js:397:12': {
				method: null,
				fileName: '/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js',
				lineNumber: 397
			},
			'    at next (/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js:277:14)': {
				method: 'next',
				fileName: '/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js',
				lineNumber: 277
			},
			'    at /node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js:286:7': {
				method: null,
				fileName: '/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js',
				lineNumber: 286
			},
			'    at next (/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js:234:23)': {
				method: 'next',
				fileName: '/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js',
				lineNumber: 234
			},
			'    at Object._onImmediate (/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js:254:5)': {
				method: 'Object._onImmediate',
				fileName: '/node.js/nodular/nodular-stackparser/node_modules/mocha/lib/runner.js',
				lineNumber: 254
			},
			'    at processImmediate [as _immediateCallback] (timers.js:309:15)': {
				method: 'processImmediate [as _immediateCallback]',
				fileName: 'timers.js',
				lineNumber: 309
			}
		}
		
		var stackRowString, correctAnswer, stackrow;
		
		for(stackRowString in tests) {
			correctAnswer = tests[stackRowString];
			
			stackrow = new StackRow(stackRowString);
			
			stackrow.should.be.a('object');
			
			stackrow.should.have.property('method', correctAnswer.method)
			stackrow.should.have.property('lineNumber', correctAnswer.lineNumber)
			stackrow.should.have.property('fileName', correctAnswer.fileName);
		}
	});
});