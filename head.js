//returns the first element in a array

const head = function (arrayProvided) {
  //console.log (arrayProvided[0])
  return (arrayProvided[0])
} 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} != ${expected}`);
  }
};


/* 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), "Hello");
*/