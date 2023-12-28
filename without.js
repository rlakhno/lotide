// This function checking if both arrays are equal and returns TRUE or FALSE
function eqArrays(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    return false;
  }

  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      return false;
    }
  }
  return true;
}

// Prints a message if Assertion Passed or Failed
function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1}  and ${array2} are equal `);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${array1}  and ${array2} are NOT equal `);
  }
}
// function without takes two arrays
function without(arrayA, arrayB) {
  let tempArray = [];

  for (let i = 0; i < arrayA.length; i++) {
    let temp = true;
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] === arrayB[j]) {
        temp = false;
        break;
      }
    }
    if (temp) {
      tempArray.push(arrayA[i]);
    }
  }
  return tempArray;
}
// Testing function - without
const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
const arrayOfWithoutLetters = ['a', 'b', 'f'];
const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbersWithout = [1, 2, 3];

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3], [1, 2])); // => [3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(numbers, numbersWithout)); // => [4,5,6,7]
console.log(without(arrayOfLetters, arrayOfWithoutLetters));//=>['d', 'e', 'f']

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
