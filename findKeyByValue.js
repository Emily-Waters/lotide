const findKeyByValue = (objectToSearch, searchValue) => {
  for (const key in objectToSearch) {
    if (searchValue === objectToSearch[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;



// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);