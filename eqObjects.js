const eqArrays = require('./eqArrays');

const eqObjects = function(actual, expected) {
  if (actual === null || expected === null) {
    return false;
  }

  let actualKeys = Object.keys(actual);
  let expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) {
    return false;
  }
  for (const keys of actualKeys) {
    console.log(keys);
    if (actual[keys] !== expected[keys]) {
      if (Array.isArray(actual[keys]) && Array.isArray(expected[keys])) {
        if (!eqArrays(actual[keys],expected[keys])) {
          return false;
        }
      } else if (typeof actual[keys] === 'object' && typeof expected[keys] === 'object') {
        if (!eqObjects(actual[keys],expected[keys])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
