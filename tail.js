//returns the first element in a array

const head = require('./head');

const assertEqual = require('./assertEqual');

const tail = function(tailArray) {
  let tailMap = tailArray;
  tailMap = tailMap.slice(1); //only one number in slice because number of ending elments unknown
  //console.log (tailArray.length) //original array still fine
  return (tailMap);
  //console.log (tailMap)

};
  
module.exports = tail;