# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm i @juicyvo/juicyvo`

**Require it:**

`const _ = require('@juicyvo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  head : takes the first value in a element
  tail : takes the last value in a element
  middle : takes the middle element, or middle two in case of a even number
  assertEqual : checks if two values are the same
  assertArrayEquals : asserts if two arrays are the same or not
  eqArrays : returns true or false if a array is equal
  assertObjectsEquals : asserts two objects if they're similiar
  eqObjects : returns true or false if object is the same
  flatten : takes a array with arrays within it and makes it into one flat array
  takeUntil : take values until it hits the the second value given
  map : makes a new array with previous arrays values
  without : returns the values that aren't in the first array
  findKey : finds the first Key in a object with the value of second entry
  countOnly : counts how many times the input shows up in the objecy
  findKeyByValue : finds key for a object by the value entered as input
  countLetters : counts how many times the letter showed in a string