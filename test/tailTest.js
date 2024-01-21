const tail = require("../tail");
const assert = require("chai").assert;



// Test
describe("# tail", () => {
  it('returns ["Lighthouse", "Labs"] when sent ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [2, 3] when sent [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns 0 when sent ["test"]', () => {
    assert.strictEqual(tail(["test"]).length, 0);
  });

  it('returns 0 when sent []', () => {
    assert.strictEqual(tail([]).length, 0);
  });
});

