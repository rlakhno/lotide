// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    return false;
  }

  for (let i = 0; i < actualArray.length; i ++) {
    if (actualArray[i] !== expectedArray[i]) {
      return false;
    }
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let bool = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      
      let value1 = object1[key];
      let value2 = object2[key];
      if (Array.isArray(value1) && Array.isArray(value2)) {
        bool = eqArrays(value1, value2);

      } else if (value1 !== value2) {
        return false;
      }
    }
    return bool;
  } else {
    return false;
  }

  return true;
};

// Tests
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

const multiTestObject = { colors: ["red", "blue"], size: "medium", sleeveLength: "long"  };
const longTestObject = { size: ["medium", "long"], colors: ["red", "blue", "rt"], sleeveLength: "long" };
assertEqual(eqObjects(multiTestObject  , longTestObject), false);

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const testObject = { size: "medium", color: "redy"};
console.log(eqObjects(shirtObject , testObject)); // => false

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
assertEqual(eqObjects(shirtObject , testObject), false); // => false

