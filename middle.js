const middle = (arr) => {
  let resultArr = [];
  const lengthOfArr = arr.length;
  const midPos = Math.ceil((lengthOfArr) / 2 - 1);
  const midPos2 = Math.floor((lengthOfArr) / 2 + 1);
  if (arr.length > 2) {
    for (let index = midPos; index < midPos2; index++) {
      resultArr.push(arr[index]);
    }
  }
  return resultArr;
};

module.exports = middle;