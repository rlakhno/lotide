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

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1}  and ${array2} are equal `);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${array1}  and ${array2} are NOT equal `);
  }
}

//Test
assertArraysEqual([], []); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS