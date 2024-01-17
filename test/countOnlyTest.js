const { assert } = require('chai');
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('#countOnly', () => {
  it('should return 1 for Jason', () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Jason"], 1);
  });

  it('should return undefined for Karima', () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.isUndefined(result1["Karima"], undefined);
  });
});
