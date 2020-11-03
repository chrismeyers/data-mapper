const yup = require('yup');

const tempValidator = yup.object().shape({
  temp: yup.number().required(),
});

module.exports = {
  c: tempValidator,
  f: tempValidator,
};
