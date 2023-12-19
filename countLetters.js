const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};

  for (let char of str) {
    console.log(char);

    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }

  }
  
  return result;
};

const sentence = "this is a number";

const result1 = countLetters(sentence);
  
console.log(result1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 1);
assertEqual(result1[" "], 3);