const convertisseurNombreRomain = require('./sum');

test('convert 2 to II', () => {
    expect(convertisseurNombreRomain(2)).toEqual("II");
});

test('convert 3 to III', () => {
    expect(convertisseurNombreRomain(3)).toEqual("III");
});

test('convert 4 to IV', () => {
    expect(convertisseurNombreRomain(4)).toEqual("IV");
});

test('convert 5 to V', () => {
    expect(convertisseurNombreRomain(5)).toEqual("V");
});

test('convert 6 to VI', () => {
    expect(convertisseurNombreRomain(6)).toEqual("VI");
});

test('convert 7 to VII', () => {
    expect(convertisseurNombreRomain(7)).toEqual("VII");
});

test('convert 8 to VIII', () => {
    expect(convertisseurNombreRomain(8)).toEqual("VIII");
});
test('convert 9 to IX', () => {
    expect(convertisseurNombreRomain(9)).toEqual("IX");
});
test('convert 10 to X', () => {
    expect(convertisseurNombreRomain(10)).toEqual("X");
});
