const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([3, 2, 1, 4], [3, 2, 1, 4]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);