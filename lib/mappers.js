/**
 * Default mappers provided by the library
 * @module lib/mappers
 */

/**
 * Converts a given object from celsius to fahrenheit
 * @param {object} data - The original data to be transformed
 * @returns {object} The transformed data
 */
const fahrenheitMapper = (data) => {
  return {
    temp: data.temp * (9 / 5) + 32,
    units: 'fahrenheit',
  };
};

/**
 * Converts a given object from fahrenheit to celsius
 * @param {object} data - The original data to be transformed
 * @returns {object} The transformed data
 */
const celsiusMapper = (data) => {
  return {
    temp: (data.temp - 32) * (5 / 9),
    units: 'celsius',
  };
};

module.exports = {
  f: fahrenheitMapper,
  c: celsiusMapper,
};
