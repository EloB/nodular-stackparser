if(!!process.platform.match(/^win/)) {
	throw new Error('Doesn\'t support windows yet.');
}

// Exports
module.exports = exports = stackparser;

var StackRow = exports.StackRow = require('./stackrow');

// Stackparser
function stackparser(error) {
	var rows = error.stack.match(StackRow.patternALL);
	
	rows.forEach(function(row, index) {
		rows[index] = new StackRow(row);
	});
	
	return rows;
}