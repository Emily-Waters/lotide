const eqArrays = require('./eqArrays');

const eqObjects = function(actual, expected) {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  if (actualKeys.length !== expectedKeys.length) {
    return false;
  }
  for (const keys of actualKeys) {
    if (actual[keys] !== expected[keys]) {
      if (Array.isArray(actual[keys]) && Array.isArray(expected[keys])) {
        if (!eqArrays(actual[keys],expected[keys])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual((eqObjects(ab, ba)), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);


// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false

module.exports = eqObjects;