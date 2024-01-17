# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lanzyy/lotide`

**Require it:**

`const _ = require('@lanzyy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: Assertion that two values (primitives) are equal.

* `head`: A commonly used function for arrays is to retrieve the first element from the array.

* `tail`: Return the "tail" of an array, everything except for the first item (head).

* `eqArrays`: Compares Arrays for a perfect match.

* `assertArrayEquals`: Assertion that two arrays are equal.

* `without`: Removes an item in an array.

* `flatten`: flattens multi-dimensional arrays.

* `middle`: Return an array with only the middle element(s) of the provided array.

* `countOnly`: Take in a collection of items and return counts for a specific subset of those items.

* `countLetters`: Take in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `letterPositions`: Return all the indices (zero-based positions) in the string where each character is found.

* `findKeyByValue`: Help us search for a key on an object where its value matches a given value.

* `eqObjects`: Compares objects for a perfect match.

* `assertObjectsEqual`: Assertion that two objects are equal.

* `map`: This function will take in two arguments: An array to map and a callback function. It will return a new array based on the results of the callback function.

* `takeUntil`: It will take in two parameters as well: The array to work with and the callback (which Lodash calls "predicate"). The function will return a slice of the array with elements taken from the beginning.

* `findKey`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.

