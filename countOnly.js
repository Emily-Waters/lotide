const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
/*
* Function Behaviour
* countOnly will be given an array and an object. It will return
* an object containing counts of everything that the input object listed.
*
* As shown in the example image above, only keys which have a truthy value
* should be counted in the resulting object. All other strings (either set
* to false or not included at all in the object) should not be counted.
* That said, if a particular string is meant to be counted but does not
* exist in the input array (like "f" in the example above), it also does
* not have to be included in the final count.
*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = (allItems, itemsToCount) => {

  const resultObj = {};
  let counter = 0;

  for (const key in itemsToCount) {

    counter = 0;

    //Check if the value of the current key is truthy, and if the current key is in the list of items.
    if (itemsToCount[key] && allItems.includes(key)) {

      //Looping through the list to determine how many times the item occurs and recording those occurences with a counter
      for (const items of allItems) {

        if (items === key) {

          //Increment counter
          counter++;

        }

      }

      //Creating a new key in the Object to be returned and assigning its value equal to the counter (how many times it occurs in the list).
      resultObj[key] = counter;

    }
  }
  return resultObj;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countLetters;