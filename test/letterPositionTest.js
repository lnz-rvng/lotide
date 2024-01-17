const { assert } = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return [2, 3] for l', () => {
    const words = letterPositions("hello");
    assert.deepEqual((words).l, [2, 3]);
  });
});

