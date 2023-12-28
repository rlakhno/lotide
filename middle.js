// FUNCTION IMPLEMENTATION
// Prints a message if Assertion Passed or Failed
function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1}  and ${array2} are equal `);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${array1}  and ${array2} are NOT equal `);
  }
}
// returns TRUE or FALSE
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

// ACTUAL FUNCTION
const middle = function(array) {
  let tempArray = [];
  if (array.length < 3) {
  } else if (array.length % 2 === 0) {
    for (let i = array.length / 2 - 1; i <= array.length / 2; i++) {
      tempArray.push(array[i]);
    }
  } else {
    let mid = Math.floor(array.length / 2);
    tempArray.push(array[mid]);
  }

  return tempArray;
};

// TEST CODE
console.log(middle([1, 2, 3, 4])); // [2,3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));  //Assertion Passed
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); //Assertion Passed
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); //Assertion Passed
console.log(eqArrays(middle([1, 2, 3, 4, 5]), [3])); // true
console.log(eqArrays(middle([1]), [])); // => true
console.log(eqArrays(middle([1, 2]), [])); // => true