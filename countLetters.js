// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  const result = {};
  for (const letter of inputString) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};


console.log(countLetters("LHL Home good world"));
assertEqual(countLetters("LHL Home good world"), { L: 2, H: 2, o: 4, m: 1, e: 1, g: 1, d: 2, w: 1, r: 1, l: 1  });

