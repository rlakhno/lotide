//Function implementation
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


const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
    
  }
  return result;
};


// Testing data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


//  Testing using assertArraysEqual
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]); // => Assertion Passed
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]); // => Assertion Passed
// using eqArrays
console.log(eqArrays(takeUntil(data1, x => x === 5), [ 1, 2 ])); // => true
console.log(eqArrays(takeUntil(data2, x => x === 'to'), [ "I've", 'been' ])); // => true
