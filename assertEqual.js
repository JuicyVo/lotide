
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} != ${expected}`); a;
  }


};


//test

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);


//console.assert(1 === 1); // => nothing happens because true
//console.assert(1 === 1.1);