const fahrenheitMapper = async (data, validator) => {
  const valid = await validator.validate(data);

  return {
    temp: valid.temp * (9 / 5) + 32,
    units: 'fahrenheit',
  };
};

const celsiusMapper = async (data, validator) => {
  const valid = await validator.validate(data);

  return {
    temp: (valid.temp - 32) * (5 / 9),
    units: 'celsius',
  };
};

module.exports = {
  f: fahrenheitMapper,
  c: celsiusMapper,
};
