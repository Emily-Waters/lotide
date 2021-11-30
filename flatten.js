//RECURSIVE FLATTEN
const flatten  = function(arr,result) {
  let resultArr = result || [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatten(element,resultArr);
    } else {
      resultArr.push(element);
    }
  });
  return resultArr;
};

module.exports = flatten;
