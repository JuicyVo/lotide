const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

// const assertArrayEquals = require("./assertArrayEquals");

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
      //console.log(newMiddle1);
      return newMiddle1;
  
    } else {
    //console.log ("odd")
      newMiddle = [(Math.round(value.length + 1) / 2)];
      console.log(newMiddle);
      return newMiddle;
    }
  }

};

module.exports = middle;