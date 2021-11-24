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

const middle = (arr) => {

  let resultArr = [];
  const lengthOfArr = arr.length;
  const midPos = Math.ceil((lengthOfArr) / 2 - 1);
  const midPos2 = Math.floor((lengthOfArr) / 2 + 1);

  // For arrays with 2 elements, return []
  // Arrays with odd numbers should return the middle element
  // Arrays with even numbers should return the middle two elements

  if (arr.length > 2) {
    for (let index = midPos; index < midPos2; index++) {
      resultArr.push(arr[index]);
    }
  }
    

  return resultArr;

};

/*
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]) , []);
assertArraysEqual(middle([1, 2, 3]) ,[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);
assertArraysEqual(middle([1, 2, 3, 4]) ,[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]);