const i = require('../index');

describe('flatten', () => {
  
  it('returns an empty array for an empty array\n\te.g.===> [] for []', () => {
    i.eqArrays(i.flatten([]), []);
  });

  it('returns a single array for a single array\n\te.g.===> [1,2,3,4,5] for [1,2,3,4,5]', () => {
    i.eqArrays(i.flatten([1,2,3,4,5]), [1,2,3,4,5]);
  });

  it('returns a flattened array for one level of nesting\n\te.g.===> [1,2,3,4,5] for [1,2,[3,4],[5]]', () => {
    i.eqArrays(i.flatten([1,2,[3,4],[5]]), [1,2,3,4,5]);
  });

  it('returns a flattened array for any level of nesting\n\te.g.===> [1,2,3,4,5] for [1,2,[3,[[4]]],[[[[[5]]]]]]', () => {
    i.eqArrays(i.flatten([1,2,[3,[[4]]],[[[[[5]]]]]]), [1,2,3,4,5]);
  });
  
});