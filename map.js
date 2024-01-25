const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
// Test arrays
const words1 = ["Mike", "Sam", "Don", "Max", "Tom"];
const words2 = ["cats", "like", "to", "sleep"];
const words3 = ["dogs", "like", "to", "jump", "high"];
const words4 = ["Ron", "lives", "in", "the", "forest"];
// Test cases
console.log("words1: ", map(words1, word => word[0]));
console.log("words2: ", map(words2, word => word[0]));
console.log("words3: ", map(words3, word => word[0]));
console.log("words4: ", map(words4, word => word[0]));
console.log("results1: ", results1);

console.log(eqArrays(map(words1, word => word[0]), [ 'M', 'S', 'D', 'M', 'T' ])); // => true
console.log(eqArrays(map(words2, word => word[0]), [ 'c', 'l', 't', 's' ])); // => true
console.log(eqArrays(map(words3, word => word[0]), [ 'd', 'l', 't', 'j', 'h' ])); // => true
assertArraysEqual(map(words4, word => word[0]), [ 'R', 'l', 'i', 't', 'f' ]); // => Assertion Passed
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => Assertion Passed
