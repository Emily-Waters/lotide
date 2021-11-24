const assertArraysEqual = (actual,expected) => {
  if (eqArrays(actual,expected)) {
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


const flatten = (arr) => {

  const resultArr = [];

  for (let item of arr) {

    if (Array.isArray(item)) {

      for (let nestItem of item) {

        resultArr.push(nestItem);

      }

    } else {

      resultArr.push(item);

    }
  }
  return resultArr;
};



console.log(flatten([1, 2, [3, 4], 5, [6]]));// => [1, 2, 3, 4, 5, 6]
