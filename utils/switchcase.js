const executeIfFunction = (f) => (typeof f === 'function' ? f() : f);

const switchcase = (cases) => (defaultCase) => (key) =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;

const switchcaseF = (cases) => (defaultCase) => (key) =>
  executeIfFunction(switchcase(cases)(defaultCase)(key));

module.exports.switchcase = switchcase;
module.exports.switchcaseF = switchcaseF;
