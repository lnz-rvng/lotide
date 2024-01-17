const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2, 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it('returns [2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});
