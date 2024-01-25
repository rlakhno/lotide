const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// Testing function - without
const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
const arrayOfWithoutLetters = ['a', 'b', 'f'];
const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbersWithout = [1, 2, 3];

console.log(eqArrays(without([1, 2, 3], [1]), [2, 3]));
console.log(eqArrays(without([1, 2, 3], [1, 2]), [3]));
console.log(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));
console.log(eqArrays(without(numbers, numbersWithout), [4,5,6,7]));
console.log(eqArrays(without(arrayOfLetters, arrayOfWithoutLetters),['c', 'd', 'e']));

const words = ["hello", "world", "lighthouse"];
console.log(eqArrays(without(words, ["lighthouse"]), [ 'hello', 'world' ])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);