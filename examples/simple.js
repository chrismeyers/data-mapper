/* eslint-disable no-console */
const dataMapper = require('..');

const { convert } = dataMapper;
const { resolveValidator, resolveMapper } = dataMapper.resolvers;

const input = {
  weird_company_name: '321 gnitset',
  reversed_flag: false,
};

try {
  const map = convert(resolveValidator('old'))(resolveMapper('new'));

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
