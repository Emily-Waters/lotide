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


module.exports = eqArrays;