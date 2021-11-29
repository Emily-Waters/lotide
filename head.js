const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  return arr[0];
};

module.exports = head;