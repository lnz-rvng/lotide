const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str, charToCount) {
  let result = {};

  for (let char of str) {
  
    if (charToCount[char]) {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
};

const sentence = "this is a number";

const result1 = countLetters(sentence, {
  "l": true,
  "h": true,
  "z": true
});

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 2);
assertEqual(result1["z"], 1);