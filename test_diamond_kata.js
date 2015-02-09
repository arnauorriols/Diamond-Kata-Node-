var should = require('should');
var v1 = require('./diamond_kata');
var v2 = require('./diamond_kata_v2');

function buildSuite(implementation) {
  function newDiamond (letter) {
    if (letter === undefined) {
      letter = 'A';
    }
    return new implementation.Diamond(letter);
  }
  return function() {
    test('should be instantable', function() {
      newDiamond().should.be.an.instanceof(implementation.Diamond);
    });
  
    test('if letter is A, returns A', function() {
      newDiamond('A').process().should.equal('A\n');
    });
  
    test('if letter is B, returns ABBA with proper spaces', function() {
      newDiamond('B').process().should.equal(' A\nB B\n A\n');
    });
  
    test('if letter is C, returns ABBCCBBA with proper spaces', function() {
      newDiamond('C').process().should.equal('  A\n B B\nC   C\n B B\n  A\n');
    });
  }
}

suite('Implementation 1', buildSuite(v1));
suite('Implementation 2', buildSuite(v2));
