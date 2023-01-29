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


const middle = function(value) {
  let newMiddle = [];
  for (let i = 0; i < value.length; i++) {
    if (value.length <= 2) {
      console.log("not enought elements");
      return newMiddle;
    } else if (value.length % 2 == 0) {
    //console.log ("even")
      newMiddle1 = [Math.floor(value.length / 2)];
      newMiddle2 = Number(newMiddle1) + 1;
      newMiddle1.push(newMiddle2);
      console.log(newMiddle1);
      return newMiddle1;
  
    } else {
    //console.log ("odd")
      newMiddle = [(Math.round(value.length + 1) / 2)];
      console.log(newMiddle);
      return newMiddle;
  

    }
  }

};


//middle([1, 2]) // => [2, 3]
//middle([1, 2, 3, 4]); // => [2, 3]
//middle([1, 2, 3, 4, 5]) // => [3]
//middle([1, 2, 3, 4, 5, 6]); // => [2, 3]

/*
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

middle([1]) // => []
middle([1, 2]) // => []


*/