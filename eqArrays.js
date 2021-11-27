const assertEqual = (actual,expected) => {
  if (actual === expected) {
    console.log(`💚️💚️💚️\tAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️🔴️🔴️\tAssertion Failed: ${actual} !== ${expected}`);
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
      if (Array.isArray(actual[index]) && Array.isArray(expected[index])) {
        if (!eqArrays(actual[index], expected[index])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

//CHECK ARRAYS FOR EQUAL LENGTH


//EXPECTED OUTPUT

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


// //TESTING
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(['1', 2, true], ['1', 2, true]), true); // => should PASS
// assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false