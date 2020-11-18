const { resolveValidator, resolveShifter } = require('../../lib/resolvers');

describe('validator resolution', () => {
  test('if it prevents loading an invalid validator', () => {
    expect(() => {
      resolveValidator('doesNotExist');
    }).toThrow();
  });

  test('if it loads a validator that exists', () => {
    expect(() => {
      resolveValidator('temp');
    }).not.toThrow();
  });
});

describe('shifter resolution', () => {
  test('if it prevents loading an invalid shifter', () => {
    expect(() => {
      resolveShifter('doesNotExist');
    }).toThrow();
  });

  test('if it loads a shifter that exists', () => {
    expect(() => {
      resolveShifter('c2f');
    }).not.toThrow();
  });
});
