// FUNCTION IMPLEMENTATION
// Prints a message if Assertion Passed or Failed
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

function flatten(array) {
  let tempArray = [];

  for (let items of array) {
    if (!Array.isArray(items)) {
      tempArray.push(items);
    }
    if (Array.isArray(items)) {
      for (let item of items) {
        tempArray.push(item);
      }
    }
  }
  return tempArray;
}

// Testing the result
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); //Assertion Passed: 1,2,3,4,5,6  and 1,2,3,4,5,6 are equal
console.log(eqArrays(flatten(['q', 's', ['d', 'e'], 6, ['t']]), ['q', 's', 'd', 'e', 6, 't'])); // =>  true
console.log(flatten(['q', 's', ['d', 'e'], NaN, ['t']])); // => [ 'q', 's', 'd', 'e', NaN, 't' ]
console.log(assertArraysEqual(flatten(['q', 's', ['d', 'e'], ['t']]), ['q', 's', 'd', 'e', 't']));
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));