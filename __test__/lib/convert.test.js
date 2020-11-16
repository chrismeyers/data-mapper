const yup = require('yup');
const convert = require('../../lib/convert');

describe('transformation pipeline', () => {
  test('if it prevents converting invalid data shapes', async () => {
    const input = { oranges: true };

    const customValidator = yup.object().shape({
      apples: yup.boolean().required(),
    });

    const customShifter = () => {};

    await expect(
      convert(customValidator)(customShifter)(input)
    ).rejects.toThrow();
  });

  test('if it proceeds converting data with the correct shape', async () => {
    const input = { apples: true };

    const customValidator = yup.object().shape({
      apples: yup.boolean().required(),
    });

    const customShifter = () => {};

    await expect(convert(customValidator)(customShifter)(input)).resolves;
  });

  test('if a custom validator function validates', async () => {
    const input = {};

    const customValidator = {
      customValidateFn: () => true,
    };

    const customShifter = () => {};

    await expect(
      convert(customValidator, 'customValidateFn')(customShifter)(input)
    ).resolves;
  });

  test('if a custom validator function fails to validate', async () => {
    const input = {};

    const customValidator = {
      customValidateFn: () => {
        throw new Error('this should break');
      },
    };

    const customShifter = () => {};

    await expect(
      convert(customValidator, 'customValidateFn')(customShifter)(input)
    ).rejects.toThrow();
  });

  test('if it converts data correctly', async () => {
    const input = { apples: true };

    const customValidator = yup.object().shape({
      apples: yup.boolean().required(),
    });

    const customShifter = (data) => {
      return {
        apples: !data.apples,
      };
    };

    const shift = convert(customValidator)(customShifter);

    await expect(shift(input)).resolves.toEqual({
      apples: false,
    });
  });
});
