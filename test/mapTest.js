const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const emptyArray = [];
const results2 = map(emptyArray, item => item * 2);
assertArraysEqual(results2, []);

const numbers = [1, 2, 3, 4, 5];
const results3 = map(numbers, num => num * num);
assertArraysEqual(results3, [1, 4, 9, 16, 25]);

const objects = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 }
];
const results4 = map(objects, obj => obj.name);
assertArraysEqual(results4, ['Alice', 'Bob', 'Charlie']);

const boolArray = [true, false, true, false];
const results5 = map(boolArray, bool => !bool);
assertArraysEqual(results5, [false, true, false, true]);