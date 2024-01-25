
const eqArrays = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    return false;
  }

  for (let i = 0; i < actualArray.length; i ++) {
    if (actualArray[i] !== expectedArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

