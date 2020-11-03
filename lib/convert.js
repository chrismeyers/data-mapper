/**
 * Provides curried function to support validation and transformation pipeline
 * @module lib/convert
 */

/**
 * Main validation and transformation pipeline
 * @param {*} validator - Sets the validator in the pipeline
 * @returns {function} Function with validator set
 *
 * @param {function} mapper - Sets the function that runs validation and
 *     transformation in the pipeline
 * @returns {function} Function with validator and mapper set
 *
 * @async
 * @param {object} data - Sets the initial data in the pipeline
 * @returns {object} The transformed data
 */
const convert = (validator) => (mapper) => async (data) => {
  const result = await mapper(data, validator);
  return result;
};

module.exports = convert;
