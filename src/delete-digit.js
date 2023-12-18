const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = Number.MIN_VALUE;
  let number = n.toString().split('');

  for (let i = 0; i < number.length; i++) {
    let currentNumber = +number.slice(0, i).concat(number.slice(i + 1)).join('');

    if (currentNumber > max) {
      max = currentNumber;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
