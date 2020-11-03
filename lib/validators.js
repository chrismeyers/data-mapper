const yup = require('yup');

const oldValidator = yup.object().shape({
  weird_company_name: yup.string().required(),
  reversed_flag: yup.boolean().required(),
});

module.exports = {
  old: oldValidator,
};
