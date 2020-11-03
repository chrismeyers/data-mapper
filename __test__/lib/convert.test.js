const yup = require('yup');
const convert = require('../../lib/convert');

describe('from and to validation', () => {
  test('if it prevents invalid from value', () => {
    expect(() => {
      convert('doesNotExist');
    }).toThrow();
  });

  test('if it allows correct from value', () => {
    expect(() => {
      convert('old');
    }).not.toThrow();
  });

  test('if it prevents invalid to value', () => {
    expect(() => {
      convert('old')('doesNotExist');
    }).toThrow();
  });

  test('if it allows correct to value', () => {
    expect(() => {
      convert('old')('new');
    }).not.toThrow();
  });
});

describe('mapping validation', () => {
  test('if it prevents converting invalid data shapes', async () => {
    const input = { apples: 1 };
    const map = convert('old')('new');

    await expect(map(input)).rejects.toThrow();
  });

  test('if it converts data with the correct shape', async () => {
    const input = {
      weird_company_name: '321 gnitset',
      reversed_flag: false,
    };
    const map = convert('old')('new');

    await expect(map(input)).resolves;
  });

  test('if it converts data correctly', async () => {
    const input = {
      weird_company_name: '321 gnitset',
      reversed_flag: false,
    };
    const map = convert('old')('new');

    await expect(map(input)).resolves.toEqual({
      company_name: 'testing 123',
      flag: true,
    });
  });
});
