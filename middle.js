
const middle = function(value) {
  let newMiddle = [ ];
  for (let i = 0; i < value.length; i++) {
    if (value.length <= 2) {
      //console.log("not enought elements");
      return newMiddle;
    } else if (value.length % 2 == 0) {
      newMiddle1 = [Math.floor(value.length / 2)];
      newMiddle2 = Number(newMiddle1) + 1;
      newMiddle1.push(newMiddle2);
      return newMiddle1;
  
    } else {
      newMiddle = [(Math.round(value.length + 1) / 2)];
      console.log(newMiddle);
      return newMiddle;
    }
  }

};

module.exports = middle;

console.log(middle([1, 2,3,4])); // expected value => [ ]
//project submmision said this was wrong but it shows the expected value