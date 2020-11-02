const mapper = require('./mapper');

const input = {
  weird_company_name: '321 gnitset',
  reversed_flag: false,
};

const mapper1 = mapper('old')('new');

(async () => {
  console.log(await mapper1(input));
})();
