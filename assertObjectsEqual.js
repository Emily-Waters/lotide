const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual,expected)) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
};

const eqObjects = function(actual, expected) {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  if (actualKeys.length !== expectedKeys.length) {
    return false;
  }
  for (const keys of actualKeys) {
    if (actual[keys] !== expected[keys]) {
      if (typeof actual[keys] === "object" && typeof expected[keys] === "object"
      && !Array.isArray(actual[keys]) && !Array.isArray(expected[keys])) {
        if (!eqObjects(actual[keys], expected[keys])) {
          return false;
        }
      } else {
        if (Array.isArray(actual[keys]) && Array.isArray(expected[keys])) {
          if (!eqArrays(actual[keys],expected[keys])) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return true;
};








const assertEqual = (actual,expected) => {
  if (actual === expected) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
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


//  TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

//  RECURSIVE TEST CASES
assertObjectsEqual({ a: { z: 1 }, b: 2 },
                   { a: { z: 1 }, b: 2 }); // => true

assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 },
                   { a: { z: 1 }, b: 2 }); // => false

assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 },
                   { a: 1, b: 2 }); // => false

assertObjectsEqual({ a: { z: { y: { x: 1, w: 10 } } }, b: 2 },
                   { a: { z: { y: { x: 1, w: 10 } } }, b: 2 }); // => true

assertObjectsEqual({ a: { z: { y: { x: 1, w: 10 } } }, b: 2 },
                   { a: { z: { y: { w: 10 } } }, b: 2 });  // => false
