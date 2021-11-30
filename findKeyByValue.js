const findKeyByValue = (objectToSearch, searchValue) => {
  for (const key in objectToSearch) {
    if (searchValue === objectToSearch[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
