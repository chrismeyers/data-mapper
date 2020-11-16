/**
 * Default shifters provided by the library
 * @module lib/shifters
 */

/**
 * Converts a given object from celsius to fahrenheit
 * @param {object} data - The original data to be transformed
 * @returns {object} The transformed data
 */
const fahrenheitShifter = (data) => {
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
const celsiusShifter = (data) => {
  return {
    temp: (data.temp - 32) * (5 / 9),
    units: 'celsius',
  };
};

module.exports = {
  f: fahrenheitShifter,
  c: celsiusShifter,
};
