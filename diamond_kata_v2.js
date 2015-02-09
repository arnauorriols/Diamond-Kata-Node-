// Diamond Kata, implementation 2.
// Goals: simplification, cohesion.
'use strict';

// Enforce same interface as implementation 1
// Important to check the flexibility of the tests by reimplementing from
// scratch without changing a single line of the tests.
module.exports.Diamond = Diamond;
  
function Diamond (letter) {
  this._letter = letter;
}
Diamond.prototype.process = function () {
  return printDiamond(this._letter);
}

function printDiamond(letter, rows) {
  if (rows === undefined){
    rows = new Array();
  }

  var padding = Array(rows.length + 1).join(' ');
  if (letter === 'A') {
    rows.unshift(padding + 'A');
  } else {
    var charCode = letter.charCodeAt(0);
    var innerSpaces = Array((charCode - 'A'.charCodeAt(0)) * 2).join(' ');
    rows.unshift(padding + letter + innerSpaces + letter);
    printDiamond(String.fromCharCode(charCode - 1), rows);
  }

  return rows.concat(rows.slice(0, -1).reverse()).join('\n') + '\n';
}
