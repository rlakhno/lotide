const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

// //Test
const word = "hel lo";

describe("# letterPositions", () => {
  it("returns [5] for 'o' in 'hel lo'", () => {
    assert.deepEqual(letterPositions(word).o, [5]);
  });
  it("returns [3, 4] for 'l' in 'hel lo'", () => {
    assert.deepEqual(letterPositions('h ello').l, [3, 4]);
  });
  it("returns [1, 11] for 'i' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').i, [1, 11]);
  });
  it("returns [12] for 'n' in 'hel lo'", () => {
    assert.deepEqual(letterPositions('lighthouse in').n, [ 12 ]);
  });

});
