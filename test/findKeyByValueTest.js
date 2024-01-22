const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;



// // Test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
describe("# findKeyByValue", () => {
  it("returns 'drama' for 'o' in 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for 'o' in 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns 'sci_fi' for 'o' in 'The Expanse'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

});
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); //drama
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); //undefined

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);