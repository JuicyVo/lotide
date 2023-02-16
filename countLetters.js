const countLetters = function(word) {
  const result = {};

  for (const item of word) {
    console.log(item);
    if (result[item] === undefined) {
      result[item] = 0;
    }
    result[item]++;
  }
  console.log(result);
  return result;
};

module.exports = countLetters;



