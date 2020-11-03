const validators = require('./validators');
const mappers = require('./mappers');

exports.resolveValidator = (type) => {
  const validator = validators[type];

  if (!validator) {
    throw new Error(`'${type}' validator is not supported`);
  }

  return validator;
};

exports.resolveMapper = (type) => {
  const mapper = mappers[type];

  if (!mapper) {
    throw new Error(`'${type}' mapper is not supported`);
  }

  return mapper;
};
