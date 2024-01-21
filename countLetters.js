

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

module.exports = countLetters;

// console.log(countLetters("LHL Home good world")); // { L: 2, H: 2, o: 4, m: 1, e: 1, g: 1, d: 2, w: 1, r: 1, l: 1 }
// const result = countLetters("LHL Home good world");
// assertEqual(result["L"], 2); // => Assertion Passed
// assertEqual(result["H"], 2); // => Assertion Passed
// assertEqual(result["g"], 1); // => Assertion Passed
// assertEqual(result["l"], 1); // => Assertion Passed
