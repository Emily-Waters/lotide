//  Implement without which will return a subset of a given array, removing unwanted elements.

//  This function should take in a source array and a itemsToRemove array.
//  It should return a new array with only those elements from source
//  that are not present in the itemsToRemove array.


const without = (source,itemsToRemove) => {

  //Declaring a storage array to return the values that haven't been removed, and a boolean trigger indicating whether a value
  //should be removed
  let resultArray = [];
  let shouldRemove = false;

  for (let original of source) {
    
    for (let remove of itemsToRemove) {

      //When a value in the original string is equal to one of the values to be removed
      //the removal trigger is set, and the loop breaks since we do not need to check the rest of the values
      if (original === remove) {
        shouldRemove = true;
        //break;
      }

    }

    //Checking if the current value has been indicated as a value to be removed, if it has been indicated
    //then we do not add it to the resultArray, otherwise we do add it
    if (!shouldRemove) {
      resultArray.push(original);
    }

    //Resetting the trigger
    shouldRemove = false;

  }
  return resultArray;
};



const assertArraysEqual = (actual,expected) => {

  if (eqArrays(actual,expected)) {

    console.log('💚️\tAssertion Passed:', actual ,'===', expected);
  
  } else {

    console.log('🔴️\tAssertion Failed:', actual ,'!==', expected);

  }
};

const eqArrays = (actual,expected) => {

  if (actual.length !== expected.length) {

    return false;

  }


  for (let index = 0; index <= actual.length - 1; index++) {

    if (actual[index] !== expected[index]) {

      return false;

    }

  }

  return true;
};
//TESTING without
//console.log(without([],[]))

console.log("\nTesting 'without'\n");

console.log('Expect [2, 3] : ' ,without([1, 2, 3], [1])); // => [2, 3]
console.log('Expect  ["1", "2"] : ', without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log("Expect  ['1', '2', '3', '4'] : ",without([1, '1', 2, '2', 3, '3', 4, '4', 4], [1,2,3,4])); // => ['1', '2', '3', '4']

//TESTING without FOR EQUALITY WITH assertArraysEqual
//assertArraysEqual(without([], []),[]); // => PASS/FAIL

console.log("\nTesting 'without' with 'assertArraysEqual'\n");

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => PASS
assertArraysEqual(without([1, 2, 3], [1]),[1, 2, 3]); // => FAIL
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => PASS
assertArraysEqual(without([1, '1', 2, '2', 3, '3', 4, '4', 4], [1,2,3,4]), ['1', '2', '3', '4']); // => PASS

//TESTING THAT without DOES NOT MODIFY THE ORIGINAL ARRAY

console.log('\nTesting that the original array is not modified\n');

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);