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

module.exports = countLetters

//countLetters("okk");
// really gotta work on learning more on objects than arrays

//for of loops works with strings

/*

lightouse lab would return
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}



*/
