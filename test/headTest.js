const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it('returns 1 for [1, 2, 3, 4]', () => {
    assert.strictEqual(head([1, 2, 3, 4]), 1);
  });

  it('returns Lighthouse Labs for ["Lighthouse Labs", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Lighthouse Labs", "Lighthouse", "Labs"]), "Lighthouse Labs");
  });

  it('returns undefined for []', () => {
    assert.isUndefined(head([]), []);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});
