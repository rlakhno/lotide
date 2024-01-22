// FUNCTION IMPLEMENTATION

function flatten(array) {
  let tempArray = [];

  for (let items of array) {
    if (!Array.isArray(items)) {
      tempArray.push(items);
    }else {
      for (let item of items) {
        tempArray.push(item);
      }
    }
  }
  return tempArray;
}


module.exports = flatten;

