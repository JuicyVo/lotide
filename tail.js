const tail = function(tailArray) {
  let tailMap = tailArray;
  tailMap = tailMap.slice(1); //only one number in slice because number of ending elments unknown
  
  return (tailMap);
  

};
  
module.exports = tail;