const findKey = function(obj, callback) {
  const object = Object.keys(obj);

  if (typeof obj !== 'object' || obj === null) {
    return undefined;
  }

  for (let key of object) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


const result = findKey(restaurants, x => x.stars === 2);
assertEqual(result, 'noma');