const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const words = letterPositions("hello");
console.log(words);
assertArraysEqual((words).l, [2, 3]);
