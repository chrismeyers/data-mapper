const convert = require('./lib/convert');

const input = {
  weird_company_name: '321 gnitset',
  reversed_flag: false,
};

try {
  const map = convert('old')('new');

  (async () => {
    try {
      const result = await map(input);
      console.log(result);
    } catch (error) {
      console.error(error.errors);
    }
  })();
} catch (error) {
  console.error(error.message);
}
