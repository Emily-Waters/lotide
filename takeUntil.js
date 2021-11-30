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

module.exports = takeUntil;