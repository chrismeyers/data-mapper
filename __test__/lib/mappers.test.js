const validators = require('../../lib/validators');
const mappers = require('../../lib/mappers');

describe('fahrenheit mapper translation', () => {
  test('if it fails schema validation', async () => {
    const input = { apples: true };
    const validator = validators.c;

    await expect(mappers.f(input, validator)).rejects.toThrow();
  });

  test('if it passes schema validation', async () => {
    const input = {
      temp: 123,
    };
    const validator = validators.c;

    await expect(mappers.f(input, validator)).resolves;
  });

  test('if it returns the expected values', async () => {
    const input = {
      temp: 17,
    };
    const validator = validators.c;

    await expect(mappers.f(input, validator)).resolves.toEqual({
      temp: 62.6,
      units: 'fahrenheit',
    });
  });
});

describe('celsius mapper translation', () => {
  test('if it fails schema validation', async () => {
    const input = { apples: true };
    const validator = validators.f;

    await expect(mappers.c(input, validator)).rejects.toThrow();
  });

  test('if it passes schema validation', async () => {
    const input = {
      temp: 123,
    };
    const validator = validators.f;

    await expect(mappers.c(input, validator)).resolves;
  });

  test('if it returns the expected values', async () => {
    const input = {
      temp: 17,
    };
    const validator = validators.f;

    await expect(mappers.c(input, validator)).resolves.toEqual({
      temp: -8.333333333333334,
      units: 'celsius',
    });
  });
});
