/**
 * Default validators provided by the library
 * @module lib/validators
 */

const yup = require('yup');

/** @type {yup.ObjectSchema} */
const tempValidator = yup.object().shape({
  temp: yup.number().required(),
  units: yup.string().matches(/(c|f)/i).required(),
});

module.exports = {
  temp: tempValidator,
};
