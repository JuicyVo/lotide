const findKeyByValue = function(objectInput, valueInput) {
  let placeholder = Object.keys(objectInput);
  console.log(placeholder);
  let i = 0;
  let answer;
  for (const show of placeholder) {
    if (valueInput === objectInput [show]) {
      answer = placeholder[i];
    } else if (valueInput === show) {
      answer = objectInput[show];
    } else answer === undefined;

    i++;
  }
  //console.log(answer);
  return answer;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;

//messy upon fixing up but I'll redo it later, was too focused on the bestTveShows aspect
