const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const sentence = "this is a number";

const result1 = countLetters(sentence);
  
console.log(result1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 1);
assertEqual(result1[" "], 3);