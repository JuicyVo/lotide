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

module.exports = findKey;