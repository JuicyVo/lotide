
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require ('./assertEqual')
const assertArrayEquals = require('./assertArrayEquals');
const eqArrays = require ('./eqArrays')
const eqObjects = require ('./eqObjects')
const assertObjectsEquals = require ('./assertObjectsEquals')
const flatten = require ("./flatten")
const takeUntil = require ("./takeUntil")
const map = require ("./map")
const without = require ("./without")
const findKey = require ("./findKey")
const countOnly = require ("./countOnly")
const findKeyByValue = require ("./findKeyByValue")
const countLetters = require ("./countLetters")


module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArrayEquals,
  eqArrays,
  assertObjectsEquals,
  eqObjects,
  flatten,
  takeUntil,
  map,
  without,
  findKey,
  countOnly,
  findKeyByValue,
  countLetters
  
};
