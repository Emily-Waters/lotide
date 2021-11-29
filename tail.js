const tail = function(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  return arr.slice(1);
};

module.exports = tail;