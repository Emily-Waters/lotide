# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emilywaters/lotide`

**Require it:**

`const _ = require('@emilywaters/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Compares arrays and logs the results as pass/fail
* `assertEqual(...)`: Strict comparison of primitives
* `assertObjectsEqual(...)`: Compares objects and logs the result as pass/fail
* `countLetters(...)`: Counts the occurence of letters in a string, and stores the letters with their occurences as key/value pairs
* `countOnly(...)`: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays(...)`: compares two arrays for strict equality
* `eqObjects(...)`: compares two objects for strict equality
* `findKey(...)`: finds a specified key in an object
* `findKeyByValue(...)`: find key(s) that have a specified value
* `flatten(...)`: Flattens nested arrays into a single array
* `head(...)`: Grabs the element of an array at index position 0
* `letterPositions(...)`: Maps each letter to a key and stores its index position(s) in an array from a given string
* `map(...)`: maps an array into a new array
* `middle(...)`: Grabs the middle element of an array, in the case of even length arrays, grabs the middle two elements
* `tail(...)`: returns an array that is from index position 1 and onwards
* `takeUntil(...)`: Takes elements of an array up to a position specified by an element value
* `without(...)`: return a subset of a given array, removing unwanted elements