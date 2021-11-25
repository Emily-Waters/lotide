
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
    console.log('💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️\tAssertion Failed:', actual ,'!==', expected);
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
assertEqual((eqObjects(ab, ba)), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);