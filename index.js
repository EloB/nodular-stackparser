module.exports = process.env.NODULAR_COV
  ? require('./lib-cov/stackparser')
  : require('./lib/stackparser');