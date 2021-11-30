const countOnly = (allItems, itemsToCount) => {
  const resultObj = {};
  let counter = 0;
  for (const key in itemsToCount) {
    counter = 0;
    if (itemsToCount[key] && allItems.includes(key)) {
      for (const items of allItems) {
        if (items === key) {
          counter++;
        }
      }
      resultObj[key] = counter;
    }
  }
  return resultObj;
};

module.exports = countOnly;