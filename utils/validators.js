const yup = require('yup');

const old = yup.object().shape({
  weird_company_name: yup.string().required(),
  reversed_flag: yup.boolean().required(),
});

module.exports = {
  old,
};
