// FUNCTION assertEqual IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Implementing function that returns the key when reaches the specific value
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//Creating a test object
const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

module.exports = findKey;

// // TEST CODE
// assertEqual(findKey(object, x => x.stars === 2), "noma"); //=> Assertion Passed
// assertEqual(findKey(object, x => x.stars > 2), "Akaleri"); //=> Assertion Passed
// assertEqual(findKey(object, x => x.stars !== 2), "Blue Hill"); //=> Assertion Passed
// assertEqual(findKey(object, x => x.stars > 3), undefined); //=> Assertion Passed

