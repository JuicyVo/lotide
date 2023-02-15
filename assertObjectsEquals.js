const assertEqual = require ('./assertEqual')
const eqArrays = require ('./eqArrays')

const eqObjects = function(object1, object2) {
  let firstKeys = Object.keys(object1).sort();
  //console.log("firstKeys " + firstKeys);
  let secondKeys = Object.keys(object2).sort();
  //console.log("secondKeys " + secondKeys);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(false);
    return false;
  }
  for (const value of firstKeys) {
    //console.log(object1[value]);
    //console.log(object2[value]);

    if (Array.isArray(object1[value]) == true) {
      if (eqArrays(object1[value], object2[value]) == false) {
        return false;
      } else if (eqArrays(object1[value], object2[value]) == true) {
        console.log(object1[value]);
      }
    } else if (
      object1[value] !== object2[value] &&
      Array.isArray(object1[value]) == false
    ) {
      console.log(false);
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  let valueOne = inspect(actual);
  let valueTwo = inspect(expected);
  let objectEqual = eqObjects(actual, expected);
  console.log(objectEqual);
  if (objectEqual === true) {
    return `🟢🟢🟢 Assertion Passed ${valueOne} === ${valueTwo}`;
  } else {
    return `🔴🔴🔴 Assertion Failed ${valueOne} !== ${valueTwo}`;
  }
};

module.exports = assertObjectsEqual
/*
//messy but it works
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
//console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
//console.log(eqObjects(longSleeveShirtObject, anotherMultiColorShirtObject));

console.log(
  assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

console.log(
  assertObjectsEqual(longSleeveShirtObject, anotherMultiColorShirtObject),
  true
);

*/
