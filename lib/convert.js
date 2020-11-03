const validators = require('./validators');
const mappers = require('./mappers');

const convert = (from) => {
  const validator = validators[from];
  if (!validator) {
    throw new Error(`'${from}' validator is not supported`);
  }
  return (to) => {
    const mapper = mappers[to];
    if (!mapper) {
      throw new Error(`'${to}' mapper is not supported`);
    }
    return async (data) => {
      try {
        const result = await mapper(data, validator);
        return result;
      } catch (error) {
        throw error;
      }
    };
  };
};

module.exports = convert;
