const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} != ${expected}`);
  }
};

const findKeyByValue = function (genres, entry) {
  let placeholder = Object.keys(bestTVShowsByGenre);
  console.log(placeholder);
  let i = 0;
  let answer;
  for (const show of placeholder) {
    // console.log(genres[show]);
    // console.log(placeholder[i]);
    if (entry === bestTVShowsByGenre[show]) {
      answer = placeholder[i];
    } else if (entry === show) {
      answer = genres[show];
    } else answer === undefined;

    i++;
  }
  console.log(answer);
  return answer;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

findKeyByValue(bestTVShowsByGenre, "The Expanse");
findKeyByValue(bestTVShowsByGenre, "comedy");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//consider using for of loop to loop over keys returned by object.keys
