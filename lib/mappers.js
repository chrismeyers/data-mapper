const newMapper = async (data, validator) => {
  try {
    const valid = await validator.validate(data);

    return {
      company_name: [...valid.weird_company_name].reverse().join(''),
      flag: !valid.reversed_flag,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  new: newMapper,
};
