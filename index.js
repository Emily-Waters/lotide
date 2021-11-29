//STRICT EQUALITY COMPARISON
const assertEqual = require('./assertEqual');
//ARRAY COMPARISONS AND METHODS
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const tail = require('./tail');
const head = require('./head');
const flatten = require('./flatten');
const map = require('./map');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const without = require('./without');
//OBJECT COMPARISONS AND METHODS
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findkey');
const findKeyByValue = require('./findKeyByValue');
//STRING METHODS
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');

module.exports = {assertEqual:assertEqual,
  eqArrays:eqArrays,
  assertArraysEqual:assertArraysEqual,
  tail:tail,
  head:head,
  flatten:flatten,
  map:map,
  middle:middle,
  takeUntil:takeUntil,
  without:without,
  eqObjects:eqObjects,
  assertObjectsEqual:assertObjectsEqual,
  findKey:findKey,
  findKeyByValue:findKeyByValue,
  countLetters:countLetters,
  countOnly:countOnly,
  letterPositions:letterPositions};