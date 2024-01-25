// function reterns the key of predicate
const findKeyByValue = function(object, predicate) {

  for (let key in object) {
    let value = object[key];
    if (value === predicate) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

