const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('returns "Lighthouse Labs" for "Lighthouse Labs"', () => {
    assert.strictEqual("Lighthouse Labs", "Lighthouse Labs");
  });

  it('returns 1 for 1', () => {
    assert.strictEqual(1, 1);
  });

  it('returns "Labs" for "Labs"', () => {
    assert.strictEqual("Labs", "Labs");
  });

  it('returns "Lighthouse" for "Lighthouse"', () => {
    assert.strictEqual("Lighthouse", "Lighthouse");
  });
});
