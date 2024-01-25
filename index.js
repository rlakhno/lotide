// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual   = require('./assertEqual');
const assertArraysEqual   = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const flatten   = require('./flatten');
const without = require('./without');
const assertObjectsEqual   = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly   = require('./countOnly');
const eqObjects   = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue   = require('./findKeyByValue');
const letterPositions   = require('./letterPositions');
const takeUntil = require('./takeUntil');

module.exports = {
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  middle,
  tail,
  takeUntil,
  without
};

