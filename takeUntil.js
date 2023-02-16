const takeUntil = function(array, callback) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return answer;
    }
    answer.push(array[i]);
  }
  return answer;
};

module.exports = takeUntil;

