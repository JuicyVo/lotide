const flatten = function(arrays) {
  let flatArray = [];

  for (let i = 0; i < arrays.length; i ++) {
    if (Array.isArray(arrays[i]) === true) {
      arrays[i].forEach(element => {
        flatArray.push(element);
      });
    //fix later
    } else if (Array.isArray(arrays[i]) === false) {
      flatArray.push(arrays[i]);
    }
  }
  console.log(flatArray);
  return (flatArray);
};


module.exports = flatten;
