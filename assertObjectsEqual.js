const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual,expected)) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
};


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  const allObjectKeys = object1Keys.concat(object2Keys);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (const key of allObjectKeys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertEqual = (actual,expected) => {
  if (actual === expected) {
    console.log('💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);