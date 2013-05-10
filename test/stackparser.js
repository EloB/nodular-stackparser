var should = require('should')
  , stackparser = require('../index');

describe('Stackparser', function() {
	it('should parser all rows from error stack', function() {
		var stackrows = stackparser(new Error());
		
		stackrows.should.be.an.instanceOf(Array);
		stackrows.should.have.length(9);
		
		stackrows.forEach(function(stackrow) {
			stackrow.should.be.an.instanceOf(stackparser.StackRow);
		});
	});
});