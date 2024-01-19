// ACTUAL FUNCTION
const middle = function(array) {
  let emptyArray = [];
  if (array.length < 3) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    for (let i = array.length / 2 - 1; i <= array.length / 2; i++) {
      emptyArray.push(array[i]);
    }
  } else {
    let mid = Math.floor(array.length / 2);
    emptyArray.push(array[mid]);
  }

  return emptyArray;
};

module.exports = middle;