const validators = require('../../lib/validators');
const mappers = require('../../lib/mappers');

describe('fahrenheit mapper transformation', () => {
  test('if it returns the expected values', () => {
    const input = {
      temp: 17,
    };

    expect(mappers.f(input)).toEqual({
      temp: 62.6,
      units: 'fahrenheit',
    });
  });
});

describe('celsius mapper transformation', () => {
  test('if it returns the expected values', () => {
    const input = {
      temp: 17,
    };
    const validator = validators.f;

    expect(mappers.c(input, validator)).toEqual({
      temp: -8.333333333333334,
      units: 'celsius',
    });
  });
});
