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

  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly:countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head: head,
  letterPositions: letterPositions,
  middle: middle,
  tail: tail,
  takeUntil: takeUntil,
  without: without 
};

