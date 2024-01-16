const head = require('../head');
const assertEqual = require('../assertEqual')

assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head(["Lighthouse Labs", "Lighthouse", "Labs"]), "Lighthouse Labs");
assertEqual(head([]), 1);