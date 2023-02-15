const assertEqual = require ('./assertEqual')

const eqArrays = require ("./eqArrays")
const assertArrayEquals = require ("./assertArrayEquals")

const without = function(firstArray, secondArray) {
  let source = [];
  let itemsToRemove = [];
  let = arrayEqual = eqArrays(firstArray, secondArray);
  console.log(arrayEqual);
  if (arrayEqual == true) {
    console.log("Missing nothing");
    return ("Missing nothing");
  } else {
    let arrayLength = firstArray.length;
    if (firstArray.length > secondArray.length) {
      arrayLength = firstArray.length;
    } else {
      arrayLength = secondArray.length;
    }
    for (let i = 0; i < arrayLength; i ++) {
      if (firstArray[i] !== secondArray[i]) {
        console.log("nope");
        itemsToRemove.push(firstArray[i]);
      }
    }
  }
  console.log(itemsToRemove);
  return (itemsToRemove);
};

module.exports = without

//without([1,1], [1,1]);
//without([1, 2, 3,4 ], [1]); // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//doesnt modify old array

/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


*/