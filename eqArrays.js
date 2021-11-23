const assertEqual = (actual,expected) => {
  if (actual === expected) {
    console.log(`💚️\tAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️\tAssertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (actual,expected) => {

  for (let index = 0; index <= actual.length - 1; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  }
  return true;
};

//CHECK ARRAYS FOR EQUAL LENGTH


//EXPECTED OUTPUT

console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


//TESTING
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(['1', 2, true], ['1', 2, true]), true); // => should PASS
assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS