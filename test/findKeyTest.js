const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

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