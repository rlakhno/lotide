// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMsg = (actual + " !== " + expected);
const localActual = actual;
const localExpected = expected;
  if (actual === expected) {
    console.log(`👍👍👍 Assertion passed:  ${actual} === ${expected}`);
  }else{
    console.log(`👎👎👎 Assertion failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
