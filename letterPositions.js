// FUNCTION IMPLEMENTATION
function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1}  and ${array2} are equal `);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${array1}  and ${array2} are NOT equal `);
  }
}

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

// Returns position of the lellers
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  // logic to update results here
  return results;
};

//Test
const word = "hel lo";
console.log(letterPositions(word).o); // => [ 5 ]
console.log(letterPositions('h ello').l); // => [ 3, 4 ]
console.log(letterPositions('lighthouse in'));
// eqArrays() function
console.log(eqArrays(letterPositions('lighthouse in the house').i, [1, 11])); // true
console.log(eqArrays(letterPositions('lighthouse in the house').e, [ 9, 16, 22 ])); // true
// assertEqual function
assertArraysEqual(letterPositions('lighthouse in').h, [ 3, 5 ]); // Assertion Passed
assertArraysEqual(letterPositions('lighthouse in').n, [ 12 ]); // Assertion Passed
