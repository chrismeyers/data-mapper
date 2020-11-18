/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
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
    ).rejects.toThrow(yup.ValidationError);
  });

  test('if it proceeds converting data with the correct shape', async () => {
    const input = { apples: true };

    const customValidator = yup.object().shape({
      apples: yup.boolean().required(),
    });

    const customShifter = () => {};

    await expect(
      convert(customValidator)(customShifter)(input)
    ).resolves.not.toThrow();
  });

  test('if a custom validator function validates', async () => {
    const input = {};

    const customValidator = {
      customValidateFn: async () => Promise.resolve({}),
    };

    const customShifter = () => {};

    await expect(
      convert(customValidator, 'customValidateFn')(customShifter)(input)
    ).resolves.not.toThrow();
  });

  test('if a custom validator function fails to validate', async () => {
    const input = {};

    const customValidator = {
      customValidateFn: async () =>
        Promise.reject(new Error('this should break')),
    };

    const customShifter = () => {};

    await expect(
      convert(customValidator, 'customValidateFn')(customShifter)(input)
    ).rejects.toThrow('this should break');
  });

  test('if a custom validator class validates', async () => {
    const input = {};

    class CustomValidator {
      async customValidateMethod() {
        return Promise.resolve({});
      }
    }

    const customValidator = new CustomValidator();
    const customShifter = () => {};

    await expect(
      convert(customValidator, 'customValidateMethod')(customShifter)(input)
    ).resolves.not.toThrow();
  });

  test('if a custom validator class fails to validate', async () => {
    const input = {};

    class CustomValidator {
      async customValidateMethod() {
        return Promise.reject(new Error('this should break'));
      }
    }

    const customValidator = new CustomValidator();
    const customShifter = () => {};

    await expect(
      convert(customValidator, 'customValidateMethod')(customShifter)(input)
    ).rejects.toThrow('this should break');
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
