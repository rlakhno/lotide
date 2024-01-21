// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const assertEqual   = require('./assertEqual');
const assertArraysEqual   = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


// const map   = require('./map');
// const flatten   = require('./flatten');
// const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  assertEqual: assertEqual,
  assertArraysEqual:   assertArraysEqual,
  eqArrays: eqArrays,
  middle: middle
};