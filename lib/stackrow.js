// Exports
module.exports = StackRow;

var PATTERN_PARSE = /^    at (?:([^\/(]*) )?\(?(.*):(\d+):(\d+)\)?$/
  , PATTERN_PARSE_ALL = /^    at (?:([^\/(]*) )?\(?(.*):(\d+):(\d+)\)?$/mg
  , PATTERN_NATIVE = /^\w/;

// StackFile
function StackRow(errorStackRow) {
	var result = errorStackRow.match(PATTERN_PARSE);
	
	if(result.length !== 5) {
		throw new Error('Doesn\'t match a stack error row');
	}
	
	this.method = result[1] || null;
	this.fileName = result[2];
	this.lineNumber = parseInt(result[3]);
}

StackRow.prototype.isNative = function() {
	return PATTERN_NATIVE.test(this.fileName);
};

StackRow.prototype.toString = function() {
	return this.fileName;
};

StackRow.pattern = PATTERN_PARSE;
StackRow.patternALL = PATTERN_PARSE_ALL;
