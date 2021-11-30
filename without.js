const without = (source,itemsToRemove) => {
  const resultArray = [];
  let shouldRemove = false;
  for (const original of source) {
    for (const remove of itemsToRemove) {
      if (original === remove) {
        shouldRemove = true;
      }
    }
    if (!shouldRemove) {
      resultArray.push(original);
    }
    shouldRemove = false;
  }
  return resultArray;
};

module.exports = without;