const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    addition = '',
    additionSeparator = '|',
    additionRepeatTimes = 1,
    separator = '+',
    repeatTimes = 1
  } = options;

  const repeatedAddition = addition + additionSeparator;
  const repeatedAdditionStr = (repeatedAddition).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  const result = (str + repeatedAdditionStr + separator).repeat(repeatTimes).slice(0, -separator.length);

  return result;
}

module.exports = {
  repeater
};
