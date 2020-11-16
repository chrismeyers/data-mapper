/**
 * Provides curried function to support validation and transformation pipeline
 * @module lib/convert
 */

/**
 * Main validation and transformation pipeline
 *
 * @param {*} validator - Validates the initial data with a validator that
 *     implements a promise-based validate() function which returns the
 *     validated data on success or throws an error on failure
 * @returns {function} Function with the validator set
 *
 * @param {function} shifter - Function that transforms the validated data
 * @returns {function} Function with the validator and shifter set
 *
 * @async
 * @param {object} data - The initial data
 * @throws Will throw an error if validation fails
 * @returns {object} The transformed data
 */
const convert = (validator) => (shifter) => async (data) => {
  const valid = await validator.validate(data);
  return shifter(valid);
};

module.exports = convert;
