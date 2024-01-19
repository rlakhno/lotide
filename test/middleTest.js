// FUNCTION importing
const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  //Assertion Passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //Assertion Passed
assertArraysEqual(middle([1, 2, 3]), [2]); //Assertion Passed
console.log(eqArrays(middle([1, 2, 3, 4, 5]), [3])); // true
console.log(eqArrays(middle([1]), [])); // => true
console.log(eqArrays(middle([1, 2]), [])); // => true