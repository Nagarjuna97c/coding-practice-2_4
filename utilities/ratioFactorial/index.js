const ratio = require("../ratio/index");
const factorial = require("../factorial/index");

const ratioAndFactorial = (a, b, c) => {
  let result = {
    ratio: ratio(a, b),
    factorial: factorial(c),
  };
  return result;
};

module.exports = ratioAndFactorial;
