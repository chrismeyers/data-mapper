const { switchcase } = require('./utils/switchcase');
const validators = require('./utils/validators');

const newMapper = async (from, data) => {
  try {
    const valid = await validators[from].validate(data);

    return {
      company_name: [...valid.weird_company_name].reverse().join(''),
      flag: !valid.reversed_flag,
    };
  } catch (error) {
    return error;
  }
};

const unsupported = (from, data) => new Error('unsupported mapper');

const mapper = (from) => (to) => async (data) => {
  return await switchcase({
    new: newMapper,
  })(unsupported)(to)(from, data);
};

module.exports = mapper;
