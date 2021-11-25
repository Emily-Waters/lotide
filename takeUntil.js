const takeUntil = (array, callback) => {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
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


// TEST

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

//  EXPECTED

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

