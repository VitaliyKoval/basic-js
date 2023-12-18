const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  }

  encrypt(message, key) {
    this.validateInputs(message, key);

    const encryptedMessage = this.processMessage(message, key, true);
    return this.isDirect ? encryptedMessage : this.reverseString(encryptedMessage);
  }

  decrypt(encryptedMessage, key) {
    this.validateInputs(encryptedMessage, key);

    const decryptedMessage = this.processMessage(encryptedMessage, key, false);
    return this.isDirect ? decryptedMessage : this.reverseString(decryptedMessage);
  }

  processMessage(message, key, isEncrypt) {
    const keyRepeated = this.repeatKey(key, message.length);
    let result = '';

    for (let i = 0; i < message.length; i++) {
      if (this.isAlphabetic(message[i])) {
        const messageCharIndex = this.charToAlphabetIndex(message[i]);
        const keyCharIndex = this.charToAlphabetIndex(keyRepeated[i]);

        let newIndex;
        if (isEncrypt) {
          newIndex = (messageCharIndex + keyCharIndex) % 26;
        } else {
          // Correct the calculation for decryption
          newIndex = (messageCharIndex - keyCharIndex + 26) % 26;
        }

        result += this.alphabet[newIndex];
      } else {
        // Preserve spaces during encryption and decryption
        result += message[i];
      }
    }

    return result;
  }

  repeatKey(key, length) {
    const repeatedKey = key.toUpperCase().repeat(Math.ceil(length / key.length)).substr(0, length);
    return repeatedKey;
  }

  isAlphabetic(char) {
    return /[A-Z]/.test(char.toUpperCase());
  }

  charToAlphabetIndex(char) {
    return this.alphabet.indexOf(char.toUpperCase());
  }

  reverseString(str) {
    return str.split('').reverse().join('');
  }

  validateInputs(message, key) {
    if (
      !message ||
      !key ||
      typeof message !== 'string' ||
      typeof key !== 'string' ||
      !message.trim() ||
      !key.trim()
    ) {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
