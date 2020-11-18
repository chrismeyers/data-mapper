/* eslint-disable no-console */
const dataShifter = require('..');

const { convert } = dataShifter;
const { resolveValidator, resolveShifter } = dataShifter.resolvers;

const data = {
  temp: 17,
  units: 'c',
};

try {
  const validator = resolveValidator('temp');
  const shifter = resolveShifter(
    data.units.toLowerCase() === 'f' ? 'f2c' : 'c2f'
  );

  (async () => {
    try {
      const shift = convert(validator)(shifter);
      const result = await shift(data);
      // This can also be done in one line:
      //   const result = await convert(validator)(shifter)(data);

      console.log(result);
      console.log(`Formatted: ${result.temp.toFixed(1)}${result.units.suffix}`);
    } catch (error) {
      console.error(error.errors);
    }
  })();
} catch (error) {
  console.error(error.message);
}
