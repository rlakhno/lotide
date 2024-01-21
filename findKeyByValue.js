// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function reterns the key of predicate
function findKeyByValue(object, predicate) {

  for (let key in object) {
    let value = object[key];
    if (value === predicate) {
      return key;
    }
  }
}

module.exports = findKeyByValue;

// // Test
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); //drama
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); //undefined

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);