// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMsg = (actual + " !== " + expected);

  console.assert(actual === expected, errorMsg);
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
