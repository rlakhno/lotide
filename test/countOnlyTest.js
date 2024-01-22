const countOnly = require('../countOnly');
const assert = require('chai').assert;

//Test ...
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
 const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1); // => Assertion Passed
// assertEqual(result1["Karima"], undefined);  // => Assertion Passed
// assertEqual(result1["Fang"], 2);  // => Assertion Passed
// assertEqual(result1["Agouhanna"], undefined); // => Assertion Passed

describe("# countOnly", () => {
  it('returns 1 for result1["Jason"]', () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it('returns undefined for result1["Karima"]', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it('returns 2 for result1["Fang"]', () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it('returns undefined for result1["Agouhanna"]', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});