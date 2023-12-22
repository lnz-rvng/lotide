const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEquals(results1, ['g', 'c', 't', 'm', 't']);

const emptyArray = [];
const results2 = map(emptyArray, item => item * 2);
assertArraysEquals(results2, []);

const numbers = [1, 2, 3, 4, 5];
const results3 = map(numbers, num => num * num);
assertArraysEquals(results3, [1, 4, 9, 16, 25]);

const objects = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 }
];
const results4 = map(objects, obj => obj.name);
assertArraysEquals(results4, ['Alice', 'Bob', 'Charlie']);

const boolArray = [true, false, true, false];
const results5 = map(boolArray, bool => !bool);
assertArraysEquals(results5, [false, true, false, true]);

