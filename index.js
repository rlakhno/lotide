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

  assertObjectsEqual:   assertObjectsEqual,
  countLetters:   countLetters,
  countOnly: countOnly,
  eqObjects:   eqObjects,
  findKey: findKey,
  findKeyByValue:   findKeyByValue,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  head:   head,
  tail:   tail,
  middle: middle,
  flatten:   flatten,
  without: without,
  assertEqual: assertEqual,
  assertArraysEqual:   assertArraysEqual,
  eqArrays: eqArrays
};

