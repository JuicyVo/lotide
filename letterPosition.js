const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} != ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  //console.log (firstArray)
  //console.log (secondArray)
  if (firstArray.length !== secondArray.length) {
    //console.log ("false, different lengths")
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        //console.log ("false, different values")
        return false;
      } else {
        //console.log ("true")
      }
    }
    return true;
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

const letterPositions = function(item) {
  const result = {};
  for (let i = 0; i <= item.length; i++) {
    let element = item[i];
    if (element !== " ") {
      if (result[element] === undefined) {
        result[element] = [i];
      } else if (result[element] !== undefined) {
        result[element].push(i);
      }
    }
  }
  //tried to change else if to else and bugs oout
  // logic to update results here
  console.log(result);
  return result;
};

letterPositions("hello");
letterPositions("lighthouse in the house");

module.exports = letterPositions