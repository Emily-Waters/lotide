//Importing both chai assert and my own eqArrays for testing
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');


describe('#middle\n', () => {

  it("returns an empty array for empty arrays\n\te.g. ==> [] for []", () => {
    // eqArrays(middle([]),[]);
    assert.deepEqual(middle([]),[]);
  });

  it("returns an empty array for single element arrays\n\te.g. ==> [] for [1]", () => {
    eqArrays(middle([1, 2]), []);
    // assert.deepEqual(middle([]),[]);
  });

  it("returns an empty array for an array of 2 elements\n\te.g. ==> [] for [1, 2]", () => {
    eqArrays(middle([1, 2, 3]), [2, 3]);
  });

  it("returns 1 element for arrays of odd length\n\te.g. ==> [2] for [1, 2, 3]", () => {
    eqArrays(middle([1, 2, 3]) ,[2]);
  });

  it("returns 2 elements for arrays of even length\n\te.g. ==> returns [2, 3] for [1, 2, 3, 4]", () => {
    eqArrays(middle([1, 2, 3, 4]) ,[2, 3]);
  });

});
