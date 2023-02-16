const without = require('../without');
const assertArrayEquals = require('../assertArrayEquals');

without([1,1], [1,1]);
without([1, 2, 3,4 ], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//doesnt modify old array


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);

