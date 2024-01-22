const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

// // Tests
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const multiTestObject = { colors: ["red", "blue"], size: "medium", sleeveLength: "long"  };
const longTestObject = { size: ["medium", "long"], colors: ["red", "blue", "rt"], sleeveLength: "long" };
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const testObject = { size: "medium", color: "redy"};

describe("# eqObjects", () => {
  it('returns true for result multiColorShirtObject, anotherMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it('returns false for result multiColorShirtObject, longSleeveMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

  it('returns false for result multiColorShirtObject, longSleeveMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(multiTestObject, longTestObject), false);
  });

  it('returns false for result multiColorShirtObject, longSleeveMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it('returns false for result multiColorShirtObject, longSleeveMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(shirtObject, longSleevetestObjectShirtObject), false);
  });

});
