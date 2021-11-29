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

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));// => [1, 2, 3, 4, 5, 6]
