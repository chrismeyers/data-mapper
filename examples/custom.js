/* eslint-disable no-console */
const yup = require('yup');
const dataShifter = require('..');

const { convert } = dataShifter;

const data = {
  word: 'gnitset',
};

const customValidator = yup.object().shape({
  word: yup.string().required(),
});

const customShifter = (valid) => {
  return {
    reversed: [...valid.word].reverse().join(''),
  };
};

const shift = convert(customValidator)(customShifter);

shift(data)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.errors));
