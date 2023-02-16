const takeUntil = require ('../takeUntil')

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

//[ 1, 2, 5, 7, 2 ]
//--
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

//keeps splicing array until hits a truthy value

//1: stops at 2
//2: stops at , after hollywoord

//result2 leads to takeUntil
//data ==array so thats easy
//x => X is the callback