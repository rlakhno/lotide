const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      
      let value1 = object1[key];
      let value2 = object2[key];
      if (Array.isArray(value1) && Array.isArray(value2)) {

        if (!eqArrays(value1, value2)) {
          return false;
        }

      } else if (value1 !== value2) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }

};

module.exports = eqObjects;
