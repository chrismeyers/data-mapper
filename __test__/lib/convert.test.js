const yup = require('yup');
const convert = require('../../lib/convert');

describe('transformation pipeline', () => {
  test('if it prevents converting invalid data shapes', async () => {
    const input = { oranges: true };

    const customValidator = yup.object().shape({
      apples: yup.boolean().required(),
    });

    const customMapper = async (data, validator) => {
      await validator.validate(data);
    };

    const map = convert(customValidator)(customMapper);

    await expect(map(input)).rejects.toThrow();
  });

  test('if it proceeds converting data with the correct shape', async () => {
    const input = { apples: true };

    const customValidator = yup.object().shape({
      apples: yup.boolean().required(),
    });

    const customMapper = async (data, validator) => {
      await validator.validate(data);
    };

    const map = convert(customValidator)(customMapper);

    await expect(map(input)).resolves;
  });

  test('if it converts data correctly', async () => {
    const input = { apples: true };

    const customValidator = yup.object().shape({
      apples: yup.boolean().required(),
    });

    const customMapper = async (data, validator) => {
      const valid = await validator.validate(data);

      return {
        apples: !valid.apples,
      };
    };

    const map = convert(customValidator)(customMapper);

    await expect(map(input)).resolves.toEqual({
      apples: false,
    });
  });
});
