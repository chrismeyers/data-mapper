const convert = (validator) => (mapper) => async (data) => {
  const result = await mapper(data, validator);
  return result;
};

module.exports = convert;
