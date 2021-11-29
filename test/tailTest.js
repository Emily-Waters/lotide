const assert = require('chai').assert;
const tail = require('../tail');
const eqArrays = require('../eqArrays');

describe('#tail\n', () => {

  it("returns length of 2 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]).length , 2);
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    eqArrays(tail([1, 2, 3]), [2, 3]);

  });

  it("returns undefined for non-arrays", () => {
    assert.strictEqual(tail(0), undefined);
  });

  it("returns an [] for []", () => {
    eqArrays(tail([]), []);
  });

});

