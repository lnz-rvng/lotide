const assert = require('chai').assert;

describe('#assertArraysEqual', () => {
  it('returns [1, 2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(([1, 2, 3]), [1, 2, 3]);
  });

  it('returns [3, 2, 1, 4] for [3, 2, 1, 4]', () => {
    assert.deepEqual([3, 2, 1, 4], [3, 2, 1, 4]);
  });

  it('returns ["1", "2", "3"] for ["1", "2", "3"]', () => {
    assert.deepEqual(["1", "2", "3"], ["1", "2", "3"]);
  });
});
