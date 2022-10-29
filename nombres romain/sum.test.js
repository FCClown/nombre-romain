const numberToRomanNumeral = require('./sum');


// ETANT DONNE : Un convertisseur de nombres romain
describe('romanNumerals', () => {
  describe('numberToRomanNumeral', () => {
    it.each([
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      [6, 'VI'],
      [7, 'VII'],
      [8, 'VIII'],
    ])('converts %i to %s', (decimalNumber, romanNumeral) => {  // QUAND : On lui donne <decimalNumber>
      expect(numberToRomanNumeral(decimalNumber)).toEqual(romanNumeral); // ALORS : On obtient <romanNumeral>
    });
  });
});
