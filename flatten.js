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

const flatten = function(arrays) {
  let flatArray = [];

  for (let i = 0; i < arrays.length; i ++) {
    if (Array.isArray(arrays[i]) === true) {
      arrays[i].forEach(element => {
        flatArray.push(element);
      });
    //fix later
    } else if (Array.isArray(arrays[i]) === false) {
      flatArray.push(arrays[i]);
    }
  }
  console.log(flatArray);
  return (flatArray);
};




flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
