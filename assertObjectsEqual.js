const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; //importing library
  const failedMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  const passedMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;

  // Validating if objects length is equal
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log(failedMessage);
    return;
  }
  for (let item of Object.keys(actual)) {
    let valueActual = actual[item];
    let valueExpected = expected[item];
    if (Array.isArray(valueActual) && Array.isArray(valueExpected)) {
      if (!eqArrays(valueActual, valueExpected)) {
        console.log(failedMessage);
        return;
      }
    } else if (valueActual !== valueExpected) {
      console.log(failedMessage);
      return;
    }
  }
  console.log(passedMessage);
};

module.exports = assertObjectsEqual;
