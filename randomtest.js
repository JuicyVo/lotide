const sum = function(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer = answer + arr[i];
  }
  console.log(answer);
  return answer;
};

sum([5,5,5]);
