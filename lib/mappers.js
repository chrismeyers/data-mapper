/**
 * Default mappers provided by the library
 * @module lib/mappers
 */

/**
 * Converts a given object from celsius to fahrenheit
 * @param {object} data - The original data to be transformed
 * @param {yup.ObjectSchema} validator - Validates the given data
 * @throws {yup.ValidationError} Throws an error if validation fails
 * @returns {object} The transformed data
 */
const fahrenheitMapper = async (data, validator) => {
  const valid = await validator.validate(data);

  return {
    temp: valid.temp * (9 / 5) + 32,
    units: 'fahrenheit',
  };
};

/**
 * Converts a given object from fahrenheit to celsius
 * @param {object} data - The original data to be transformed
 * @param {yup.ObjectSchema} validator - Validates the given data
 * @throws {yup.ValidationError} Throws an error if validation fails
 * @returns {object} The transformed data
 */
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
