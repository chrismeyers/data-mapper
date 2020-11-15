/* eslint-disable no-console */
const dataShifter = require('..');

const { convert } = dataShifter;
const { resolveValidator, resolveMapper } = dataShifter.resolvers;

const input = {
  temp: 17,
};

try {
  const map = convert(resolveValidator('c'))(resolveMapper('f'));

  (async () => {
    try {
      const result = await map(input);
      console.log(result);
    } catch (error) {
      console.error(error.errors);
    }
  })();
} catch (error) {
  console.error(error.message);
}
