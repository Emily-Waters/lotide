const assertArraysEqual = (actual,expected) => {
  if (eqArrays(actual,expected)) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
};

const eqArrays = (actual,expected) => {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let index = 0; index <= actual.length - 1; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([5, 2, 3], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, '3'], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL

