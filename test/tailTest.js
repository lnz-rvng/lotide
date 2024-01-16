const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([1, 2, 3, 4]).length, 3);
assertEqual(tail([1, 2, 3, 4, 5, 6]).length, 3);

assertEqual(tail([]).length, 3);
assertEqual(tail([1]).length, 3);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"