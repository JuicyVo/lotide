//returns the first element in a array

const head = function(headArray) {
  //console.log (headArray)[0])
  return (headArray[0]);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} != ${expected}`);
  }
};

const tail = function(tailArray) {
  let tailMap = tailArray;
  tailMap = tailMap.slice(1); //only one number in slice because number of ending elments unknown
  //console.log (tailArray.length) //original array still fine
  return (tailMap);
  //console.log (tailMap)

};
  
  
  
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
  