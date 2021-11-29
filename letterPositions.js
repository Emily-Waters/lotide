const letterPositions = (inputStr) => {
  //resultObj stores the contents of indexArr as values with their associated keys
  const resultObj = {};
  let indexArr = [];
  for (const letter of inputStr) {
    indexArr = [];
    //Check if the key does not exist in resultObj so that we can add it or ignore
    if (!resultObj[letter] && letter !== ' ') {
      //Iterate through the string, providing index values for each letter
      for (const index in inputStr) {
        //Check if our current letter is equal to the letter in the original string
        if (letter === inputStr[index]) {
          //Append the index position as a number to the array of indexes
          indexArr.push(Number(index));
        }
        //Add the letter as a key and the array of indexes as its value
        resultObj[letter] = indexArr;
      }
    }
  }
  return resultObj;
};

module.exports = letterPositions;

// const actualOutput = letterPositions('lighthouse in the house');
// const expectedOutput = {l: [0],i: [1, 11],g: [2],h: [3, 5, 15, 18],t: [4, 14],o: [6, 19],u: [7, 20],s: [8, 21],e: [9, 16, 22],n: [12]};

// console.log(actualOutput);
// console.log(expectedOutput);

// for (let key in actualOutput) {
//   assertArraysEqual(actualOutput[key], expectedOutput[key]);
// }

