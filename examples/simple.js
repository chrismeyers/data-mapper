/* eslint-disable no-console */
const dataMapper = require('..');

const { convert } = dataMapper;
const { resolveValidator, resolveMapper } = dataMapper.resolvers;

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
