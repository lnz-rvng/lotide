const assertObjectsEqual = require('../assertObjectsEqual');

const object1 = { a: 1, b: [2, 3], c: [2] };
const object2 = { b: [2, 3], a: 1, c: [2] };
assertObjectsEqual(object1, object2);