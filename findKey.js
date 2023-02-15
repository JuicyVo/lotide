const assertEqual = require ('./assertEqual')

const findKey = function(object, callback) {
  console.log(object);
  console.log(callback);
  let objLength = Object.keys(object).length;
  for (let i = 0; i < objLength; i++) {
    key = Object.keys(object)[i];
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey
/*
console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
); // => "noma"

// scan object, return first key for which callback returns a truthly value, if none return undefined
*/