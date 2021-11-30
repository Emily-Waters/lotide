const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual,expected)) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
};

module.exports = assertObjectsEqual;