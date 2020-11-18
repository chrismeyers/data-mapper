/**
 * Attempts to load conversion components provided by the library
 * @module lib/resolvers
 */

const validators = require('./validators');
const shifters = require('./shifters');

/**
 * Attempts to load a validator provided by the library
 * @param {string} type - The type of validator
 * @throws {Error} Throws an error when given an invalid validator type
 * @returns {yup.ObjectSchema} The resolved validator
 */
exports.resolveValidator = (type) => {
  const validator = validators[type];

  if (!validator) {
    throw new Error(`"${type}" validator is not supported`);
  }

  return validator;
};

/**
 * Attempts to load a shifter provided by the library
 * @param {string} type - The type of shifter
 * @throws {Error} Throws an error when given an invalid shifter type
 * @returns {function} The resolved shifter
 */
exports.resolveShifter = (type) => {
  const shifter = shifters[type];

  if (!shifter) {
    throw new Error(`"${type}" shifter is not supported`);
  }

  return shifter;
};
