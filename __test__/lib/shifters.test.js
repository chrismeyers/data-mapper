const shifters = require('../../lib/shifters');

describe('fahrenheit shifter transformation', () => {
  test('if it returns the expected values', () => {
    const input = {
      temp: 17,
    };

    expect(shifters.f(input)).toEqual({
      temp: 62.6,
      units: 'fahrenheit',
    });
  });
});

describe('celsius shifter transformation', () => {
  test('if it returns the expected values', () => {
    const input = {
      temp: 17,
    };

    expect(shifters.c(input)).toEqual({
      temp: -8.333333333333334,
      units: 'celsius',
    });
  });
});
