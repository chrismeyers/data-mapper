/**
 * Default shifters provided by the library
 * @module lib/shifters
 */

/**
 * Converts a given object from celsius to fahrenheit
 * @param {object} data - The original data to be transformed
 * @returns {object} The transformed data
 */
const celsiusToFahrenheitShifter = (data) => {
  return {
    temp: data.temp * (9 / 5) + 32,
    units: {
      name: 'fahrenheit',
      suffix: '°F',
    },
  };
};

/**
 * Converts a given object from fahrenheit to celsius
 * @param {object} data - The original data to be transformed
 * @returns {object} The transformed data
 */
const fahrenheitToCelsiusShifter = (data) => {
  return {
    temp: (data.temp - 32) * (5 / 9),
    units: {
      name: 'celsius',
      suffix: '°C',
    },
  };
};

module.exports = {
  c2f: celsiusToFahrenheitShifter,
  f2c: fahrenheitToCelsiusShifter,
};
