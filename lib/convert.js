const convert = (validator) => (mapper) => async (data) => {
  try {
    const result = await mapper(data, validator);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = convert;
