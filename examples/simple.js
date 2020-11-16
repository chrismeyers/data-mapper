/* eslint-disable no-console */
const dataShifter = require('..');

const { convert } = dataShifter;
const { resolveValidator, resolveShifter } = dataShifter.resolvers;

const data = {
  temp: 17,
};

try {
  const validator = resolveValidator('c');
  const shifter = resolveShifter('f');

  (async () => {
    try {
      const shift = convert(validator)(shifter);
      const result = await shift(data);
      // This can also be done in one line:
      //   const result = await convert(validator)(shifter)(data);

      console.log(result);
    } catch (error) {
      console.error(error.errors);
    }
  })();
} catch (error) {
  console.error(error.message);
}
