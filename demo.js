var Benchmark = require('benchmark');

var v1 = require('./diamond_kata');
var v2 = require('./diamond_kata_v2');

console.log('Implementation 1:\n' +
            '#################\n\n' +
             new v1.Diamond('N').process());

console.log('Implementation 2:\n' +
            '#################\n\n' +
             new v2.Diamond('N').process());

var suite = new Benchmark.Suite('Diamond Kata');
suite.add('Implementation 1', function () {
  new v1.Diamond('N').process();
});
suite.add('Implementation 2', function () {
  new v2.Diamond('N').process();
});
suite.on('cycle', function (event) {
  console.log(event.target.toString());
});

suite.run();
