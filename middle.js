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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  const middleArray = [];
  if (arr !== undefined) {
    if (arr.length % 2 === 1) {
      const midIndex = Math.floor(arr.length / 2);
      const midElements = arr[midIndex];
      middleArray.push(midElements);
    } else if (arr.length % 2 === 0) {
      const midIndex = arr.length / 2;
      const midElement1 = arr[midIndex - 1];
      const midElement2 = arr[midIndex];
      middleArray.push(midElement1, midElement2);
    }
  }
  return middleArray;
};

assertArraysEquals(middle([1]), []);
assertArraysEquals(middle([1, 2]), []);

assertArraysEquals(middle([1, 2, 3]), [2]);
assertArraysEquals(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEquals(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

assertArraysEquals(middle([1, 2, 3]), true);