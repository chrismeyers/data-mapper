const yup = require('yup');
const convert = require('../../lib/convert');

describe('from and to validation', () => {
  test('if it prevents invalid from value', () => {
    const resolveValidator = (type) => {
      throw new Error('undefined validator');
    };

    expect(() => {
      convert(resolveValidator('doesNotExist'));
    }).toThrow();
  });

  test('if it allows correct from value', () => {
    const resolveValidator = (type) => {};

    expect(() => {
      convert(resolveValidator('exists'));
    }).not.toThrow();
  });

  test('if it prevents invalid to value', () => {
    const resolveValidator = (type) => {};
    const resolveMapper = (type) => {
      throw new Error('undefined validator');
    };

    expect(() => {
      convert(resolveValidator('exists'))(resolveMapper('doesNotExist'));
    }).toThrow();
  });

  test('if it allows correct to value', () => {
    const resolveValidator = (type) => {};
    const resolveMapper = (type) => {};

    expect(() => {
      convert(resolveValidator('exists'))(resolveMapper('exists'));
    }).not.toThrow();
  });
});

describe('mapping validation', () => {
  test('if it prevents converting invalid data shapes', async () => {
    const input = { oranges: true };

    const resolveValidator = (type) => {
      return yup.object().shape({
        apples: yup.boolean().required(),
      });
    };
    const resolveMapper = async (type) => {};

    const map = convert(resolveValidator('exists'))(resolveMapper('exists'));

    await expect(map(input)).rejects.toThrow();
  });

  test('if it converts data with the correct shape', async () => {
    const input = { apples: true };

    const resolveValidator = (type) => {
      return yup.object().shape({
        apples: yup.boolean().required(),
      });
    };
    const resolveMapper = (type) => async (data, validator) => {};

    const map = convert(resolveValidator('exists'))(resolveMapper('exists'));

    await expect(map(input)).resolves;
  });

  test('if it converts data correctly', async () => {
    const input = { apples: true };

    const resolveValidator = (type) => {
      return yup.object().shape({
        apples: yup.boolean().required(),
      });
    };
    const resolveMapper = (type) => async (data, validator) => {
      return { not_apples: false };
    };

    const map = convert(resolveValidator('exists'))(resolveMapper('exists'));

    await expect(map(input)).resolves.toEqual({
      not_apples: false,
    });
  });
});
