const assertEqual = (actual,expected) => {

  if (actual === expected) {

    console.log('💚️\tAssertion Passed:', actual ,'===', expected);

  } else {

    console.log('🔴️\tAssertion Failed:', actual ,'!==', expected);
    
  }
};




const countLetters = (inputString) => {

  //workingStr removes all whitespace from inputString, resultObj is an empty container for the key/value to be stored and counter
  //serves to keep track of how many times any given letter occurs within the incoming string.
  const workingStr = inputString.replace(/\s/g,'');
  const resultObj = {};
  let counter = 0;

  for (const letter of workingStr) {

    counter = 0;

    //Check if the current letter does not exist as a key within resultObj
    if (!resultObj[letter]) {

      //Iterate through workingStr to count the occurences of the current letter and increment accordingly
      for (const letterCount of workingStr) {

        if (letterCount === letter) {

          counter++;

        }

        //Add the letter as a key with the value of the counter
        resultObj[letter] = counter;
      }

    }

  }

  return resultObj;
};


console.log(countLetters('lighthouse in the house'));
console.log({
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});

