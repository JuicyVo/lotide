const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} != ${expected}`);
  }
};

const eqArrays = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      } else {
      }
    }
    return true;
  }
};

const eqObjects = function (object1, object2) {
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
      if (eqArrays (object1[value], object2[value]) ==false) {
        return false;
      }
      else if (eqArrays (object1[value], object2[value]) == true ) {
        console.log ("hi")
        console.log (object1[value])
      }
    }
    else if ((object1[value] !== object2[value]) && (Array.isArray(object1[value]) ==false) ) {
      console.log(false);
      return false;
    }
  }
  return true;
};

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
console.log(eqObjects(longSleeveShirtObject, anotherMultiColorShirtObject)); 

//assertEqual (eqObjects(shirtObject, anotherShirtObject), true)

/*

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

//the value key each in each object has to be the same
//needs same number of keys


*/
