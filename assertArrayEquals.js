
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  //console.log (firstArray)
  //console.log (secondArray)
  if (firstArray.length !== secondArray.length) {
  //console.log ("false, different lengths")
    return (false);
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== (secondArray[i])) {
      //console.log ("false, different values")
        return (false);
      } else {
      //console.log ("true")
      }
    }
    return (true);
  }
};

const assertArrayEquals = function(firstArray, secondArray) {
  console.log(eqArrays(firstArray, secondArray));
  let arrayAssert = eqArrays(firstArray, secondArray);
  if (arrayAssert === true) {
    console.log(`🟢🟢🟢 Assertion Passed ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${firstArray} !== ${secondArray}`);
  }
};


console.log(assertArrayEquals([1, 2, 3], [1, 2, 3]));
console.log(assertArrayEquals([1, 2, 3], [1, 2, 3, 4]));