const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

// // Testing data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


//  Testing using assertArraysEqual
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]); // => Assertion Passed
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]); // => Assertion Passed
// using eqArrays
console.log(eqArrays(takeUntil(data1, x => x === 5), [ 1, 2 ])); // => true
console.log(eqArrays(takeUntil(data2, x => x === 'to'), [ "I've", 'been' ])); // => true