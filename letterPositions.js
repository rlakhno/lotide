// FUNCTION IMPLEMENTATION
// Returns position of the lellers
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  // logic to update results here
  return results;
};

module.exports = letterPositions;

