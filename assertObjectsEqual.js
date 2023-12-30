// FUNCTION IMPLEMENTATION
function eqArrays(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    return false;
  }

  for (let i = 0; i < actualArray.length; i ++) {
    if (actualArray[i] !== expectedArray[i]) {
      return false;
    }
  }
  return true;
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!

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

// Tests
const actualObj = { colors: "blue", size: "medium" };
const expectedObj1 = { size: "medium", colors: "blue" };
const expectedObj2 = { size: "medium", colors: "red"};
const expectedObj3 = { size: "medium", colors: "red", weight: "10"};
assertObjectsEqual(actualObj, expectedObj1); // => Assertion Passed
assertObjectsEqual(actualObj, expectedObj2);  // => Assertion Failed
console.log(assertObjectsEqual(actualObj, expectedObj3));  // => Assertion Failed

const actualObject = { colors: ["red", "blue"], size: "medium" };
const expectedObject = { size: "medium", colors: ["red", "blue"] };
const expectedObject1 = { size: "medium", colors: ["red", "blue"], weight: [3] };
assertObjectsEqual(actualObject, expectedObject);  // => Assertion Passed
assertObjectsEqual(actualObject, expectedObject1);  // => Assertion Failed

