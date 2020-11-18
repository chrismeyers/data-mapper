const shifters = require('../../lib/shifters');

describe('c2f shifter', () => {
  test('if it returns the expected values', () => {
    const input = {
      temp: 17,
      units: 'c',
    };

    expect(shifters.c2f(input)).toEqual({
      temp: 62.6,
      units: {
        name: 'fahrenheit',
        suffix: '°F',
      },
    });
  });
});

describe('f2c shifter', () => {
  test('if it returns the expected values', () => {
    const input = {
      temp: 17,
      units: 'f',
    };

    expect(shifters.f2c(input)).toEqual({
      temp: -8.333333333333334,
      units: {
        name: 'celsius',
        suffix: '°C',
      },
    });
  });
});
