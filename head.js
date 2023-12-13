const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(testArr) {
  return (testArr[0]);
};

assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head(["Lighthouse Labs", "Lighthouse", "Labs"]), "Lighthouse Labs");
assertEqual(head([]), 1);