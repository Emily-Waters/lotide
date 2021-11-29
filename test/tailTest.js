const assert = require('chai').assert;
const index = require('../index');
// const eqArrays = require('../eqArrays');

describe('#tail\n', () => {

  it("returns length of 2 for [1, 2, 3]", () => {
    assert.strictEqual(index.tail([1, 2, 3]).length , 2);
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    index.eqArrays(index.tail([1, 2, 3]), [2, 3]);

  });

  it("returns undefined for non-arrays", () => {
    assert.strictEqual(index.tail(0), undefined);
  });

  it("returns an [] for []", () => {
    index.eqArrays(index.tail([]), []);
  });

});

