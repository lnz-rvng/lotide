const { assert } = require('chai');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeybyValue', () => {
  it('should return "drama" for "The Wire"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});
