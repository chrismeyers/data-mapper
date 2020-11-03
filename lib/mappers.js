const newMapper = async (data, validator) => {
  const valid = await validator.validate(data);

  return {
    company_name: [...valid.weird_company_name].reverse().join(''),
    flag: !valid.reversed_flag,
  };
};

module.exports = {
  new: newMapper,
};
