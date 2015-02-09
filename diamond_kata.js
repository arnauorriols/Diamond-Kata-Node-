// Diamond Kata with a TDD approach. First attempt

'use strict';

module.exports.Diamond = Diamond;

// Encapsulate line printing
function Letter(char, spaces) {
  this._char = char;
  this._spaces = spaces;
}
Letter.prototype.print = function print() {
  return this._char + (
    (this._spaces > 0)
      ? (Array(this._spaces + 1).join(' ') + this._char + '\n')
      : '\n'
  );
}

// Singleton list with all letters
var LETTERS = new function () {
  // Init all upper-case letters
  for (let char=65; char <= 90; char++) {
    let character = String.fromCharCode(char);
    this[character] = new Letter(character, (char - 65) + (char - 65 - 1));
  }
}();
LETTERS.__proto__.iterateLetters = function (character, callback) {
  var chars = Object.keys(this);
  var last = chars.indexOf(character);
  var pos = 0;
  var direction = 1;
  // Forwards
  while (pos >= 0) {
    callback(this[chars[pos]], pos, last);
    if (pos === last) {
      // Reached final character, return to 'A'
      direction = -1;
    }
    pos += 1 * direction;
  }
};

function Diamond (letter) {
  if (typeof(letter) !== 'string' && !(letter instanceof String)) {
    throw new Error('Letter must be an string');
  }
  this._letter = letter;
}
Diamond.prototype.process = function process() {
  var prefix = function (max, current) {
    return Array(1 + max - current).join(' ');
  };
  var result = '';
  LETTERS.iterateLetters(this._letter, function (letter, current, last) {
    result += prefix(last, current);
    result += letter.print();
  });
  return result;
};
