const { resolveValidator, resolveMapper } = require('../../lib/resolvers');

describe('validator resolution', () => {
  test('if it prevents loading an invalid validator', () => {
    expect(() => {
      resolveValidator('doesNotExist');
    }).toThrow();
  });

  test('if it loads a validator that exists', () => {
    expect(() => {
      resolveValidator('c');
    }).not.toThrow();
  });
});

describe('mapper resolution', () => {
  test('if it prevents loading an invalid mapper', () => {
    expect(() => {
      resolveMapper('doesNotExist');
    }).toThrow();
  });

  test('if it loads a mapper that exists', () => {
    expect(() => {
      resolveMapper('f');
    }).not.toThrow();
  });
});
