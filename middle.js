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

module.exports = middle;
