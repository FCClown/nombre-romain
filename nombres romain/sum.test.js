const numberToRomanNumeral = require('./sum');

describe('romanNumerals', () => {
  describe('numberToRomanNumeral', () => {
    it.each([
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
    ])('converts %i to %s', (decimalNumber, romanNumeral) => {
      expect(numberToRomanNumeral(decimalNumber)).toEqual(romanNumeral);
    });
  });
});
