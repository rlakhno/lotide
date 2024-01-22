const flatten = require('../flatten');
const assert = require('chai').assert;


describe("# flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns ['q', 's', 'd', 'e', 6, 't'] for ['q', 's', ['d', 'e'], 6, ['t']]", () => {
    assert.deepEqual(flatten(['q', 's', ['d', 'e'], 6, ['t']]), ['q', 's', 'd', 'e', 6, 't']);
  });

  it("returns ['q', 's', 'd', 'e', NaN, 't'] for ['q', 's', ['d', 'e'], NaN, ['t']]", () => {
    assert.deepEqual(flatten(['q', 's', ['d', 'e'], NaN, ['t']]), ['q', 's', 'd', 'e', NaN, 't']);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});
  
