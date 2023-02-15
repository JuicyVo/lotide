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
      console.log("check");
      if (eqArrays(object1[value], object2[value]) == false) {
        return false;
      } else if (eqArrays(object1[value], object2[value]) == true) {
        console.log("hi");
        console.log(object1[value]);
      }
    } else if ((object1[value] !== object2[value]) && (Array.isArray(object1[value]) == false)) {
      console.log(false);
      return false;
    }
  }
  return true;
};

module.exports = eqObjects