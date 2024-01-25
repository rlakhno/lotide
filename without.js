
// function without takes two arrays
const without = function(arrayA, arrayB) {
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
};



module.exports = without;


