const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual,expected)) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
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

module.exports = assertObjectsEqual;