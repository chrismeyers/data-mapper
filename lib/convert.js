/**
 * Provides curried function to support validation and transformation pipeline
 * @module lib/convert
 */

/**
 * Main validation and transformation pipeline
 *
 * @param {*} validator - Validates the initial data with a validator that
 *     returns the validated data on success and throws an error on failure
 * @param {string} [fn=validate] - The async validator function to call
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
const convert = (validator, fn = 'validate') => (shifter) => async (data) => {
  const valid = await validator[fn](data);
  return shifter(valid);
};

module.exports = convert;
