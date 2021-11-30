const letterPositions = (inputStr) => {
  const resultObj = {};
  let indexArr = [];
  for (const letter of inputStr) {
    indexArr = [];
    if (!resultObj[letter] && letter !== ' ') {
      for (const index in inputStr) {
        if (letter === inputStr[index]) {
          indexArr.push(Number(index));
        }
        resultObj[letter] = indexArr;
      }
    }
  }
  return resultObj;
};

module.exports = letterPositions;
