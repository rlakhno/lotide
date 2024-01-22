const assert = require('assert').assert;
const eqArrays = require('../eqArrays');

// TESTS eqArrays
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS