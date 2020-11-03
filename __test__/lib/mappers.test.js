const validators = require('../../lib/validators');
const mappers = require('../../lib/mappers');

describe('new mapper translation', () => {
  test('if it fails schema validation', async () => {
    const input = { apples: true };
    const validator = validators.old;

    await expect(mappers.new(input, validator)).rejects.toThrow();
  });

  test('if it passes schema validation', async () => {
    const input = {
      weird_company_name: 'test',
      reversed_flag: false,
    };
    const validator = validators.old;

    await expect(mappers.new(input, validator)).resolves;
  });

  test('if it returns the expected values', async () => {
    const input = {
      weird_company_name: 'tset',
      reversed_flag: false,
    };
    const validator = validators.old;

    await expect(mappers.new(input, validator)).resolves.toEqual({
      company_name: 'test',
      flag: true,
    });
  });
});
