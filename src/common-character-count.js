const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let counter1 = {};
  let counter2 = {};

  for (let char of s1.split('')) {
    if (!counter1[char]) {
      counter1[char] = 0;
    }
    counter1[char]++;
  }

  for (let char of s2.split('')) {
    if (!counter2[char]) {
      counter2[char] = 0;
    }
    counter2[char]++;
  }

  for (let key in counter1) {
    if (key in counter2) {
      if (counter1[key] < counter2[key]) {
        result += counter1[key];
      } else {
        result += counter2[key];
      }
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
