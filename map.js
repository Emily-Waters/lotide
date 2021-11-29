const map = (array) => {
  const results = [];
  for (let item of array) {
    results.push(item);
  }
  return results;
};

module.exports = map;
// TESTING

// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const wordsAndNumbers = [1,'2',3,'Four',500,'B a n a n a s'];

// const results1 = map(words);
// const results2 = map(numbers);
// const results3 = map(wordsAndNumbers);

// assertArraysEqual(results1,words);  // => PASS
// assertArraysEqual(results2,numbers);  // => PASS
// assertArraysEqual(results2,words);  // => FAIL
// assertArraysEqual(results1,numbers);  // => FAIL
// assertArraysEqual(results3,wordsAndNumbers);  // => PASS