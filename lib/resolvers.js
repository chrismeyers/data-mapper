/**
 * Attempts to load conversion components provided by the library
 * @module lib/resolvers
 */

const validators = require('./validators');
const mappers = require('./mappers');

/**
 * Attempts to load a validator provided by the library
 * @param {string} type - The type of validator
 * @throws {Error} Throws an error when given an invalid validator type
 * @returns {yup.ObjectSchema} The resolved validator
 */
exports.resolveValidator = (type) => {
  const validator = validators[type];

  if (!validator) {
    throw new Error(`'${type}' validator is not supported`);
  }

  return validator;
};

/**
 * Attempts to load a mapper provided by the library
 * @param {string} type - The type of mapper
 * @throws {Error} Throws an error when given an invalid mapper type
 * @returns {function} The resolved mapper
 */
exports.resolveMapper = (type) => {
  const mapper = mappers[type];

  if (!mapper) {
    throw new Error(`'${type}' mapper is not supported`);
  }

  return mapper;
};
