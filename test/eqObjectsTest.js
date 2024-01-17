const eqObjects = require('../eqObjects');
const { assert } = require('chai');

describe('#eqObjects', () => {
  it('should return true', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject , anotherShirtObject));
  });

  it('should return false', () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.isFalse(eqObjects(shirtObject , longSleeveShirtObject));
  });
});
