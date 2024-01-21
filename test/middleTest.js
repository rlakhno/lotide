// FUNCTION importing
const assert = require('chai').assert;
const middle = require('../middle');


// TEST CODE
describe('#middle', () => {
  it("returns [2, 3] when passed [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] when passed [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [2] when passed [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] when passed [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [] when passed [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] when passed [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  //Assertion Passed
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //Assertion Passed
// assertArraysEqual(middle([1, 2, 3]), [2]); //Assertion Passed
// console.log(eqArrays(middle([1, 2, 3, 4, 5]), [3])); // true
// console.log(eqArrays(middle([1]), [])); // => true
// console.log(eqArrays(middle([1, 2]), [])); // => true