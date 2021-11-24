const assertEqual = (actual,expected) => {

  if (actual === expected) {

    console.log('💚️\tAssertion Passed:', actual ,'===', expected);

  } else {

    console.log('🔴️\tAssertion Failed:', actual ,'!==', expected);
    
  }
};


const findKeyByValue = (objectToSearch, searchValue) => {

  //Iterate through keys in order to compare their value against our searchValue, and return the appropriate key, or undefined if no match
  for (const key in objectToSearch) {

    if (searchValue === objectToSearch[key]) {
      return key;
    }
  }

};




const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);