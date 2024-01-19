// ACTUAL FUNCTION
const middle = function(array) {
  let emptyArray = [];
  if (array.length < 3) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    emptyArray.push(array[array.length / 2 - 1]);
    emptyArray.push(array[array.length / 2]);

  } else {
    let mid = Math.floor(array.length / 2);
    emptyArray.push(array[mid]);
  }

  return emptyArray;
};

module.exports = middle;