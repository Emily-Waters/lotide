//COUNTS THE LETTERS IN A STRING OR SENTENCE AND RETURNS AN OBJECT WITH THE LETTERS AND HOW MANY TIMES THEY OCCURRED
const countLetters = (inputString) => {
  const workingStr = inputString.replace(/\s/g,'');
  const resultObj = {};
  let counter = 0;
  for (const letter of workingStr) {
    counter = 0;
    if (!resultObj[letter]) {
      for (const letterCount of workingStr) {
        if (letterCount === letter) {
          counter++;
        }
        resultObj[letter] = counter;
      }
    }
  }
  return resultObj;
};

module.exports = countLetters;