
const eqArrays = require("./eqArrays");

const without = function(firstArray, secondArray) {
  let itemsLeft = [];
  let = arrayEqual = eqArrays(firstArray, secondArray);
  console.log(arrayEqual);
  if (arrayEqual == true) {
    console.log("Missing nothing");
    return itemsLeft;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (!secondArray.includes(firstArray[i])) {
        itemsLeft.push(firstArray[i]);
      }
    }
  }
  console.log(itemsLeft);
  return (itemsLeft);
};

module.exports = without;


//console.log (without([1], [1]));               // => [ ]
//console.log (without([1, 3, 1, 4], [1]));  // => [3, 4]
