// FUNCTION IMPLEMENTATION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};



module.exports = countOnly;

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1); // => Assertion Passed
// assertEqual(result1["Karima"], undefined);  // => Assertion Passed
// assertEqual(result1["Fang"], 2);  // => Assertion Passed
// assertEqual(result1["Agouhanna"], undefined); // => Assertion Passed