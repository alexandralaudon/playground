// Write an algorithm that removes all duplicate elements from the array.

var removeDups = function(array){
  var localArray = [];
  array.forEach(function(elem){
    if (localArray.indexOf(elem) === -1) localArray.push(elem);
  });
  return localArray;

};

console.log(removeDups([1,6,2,3,3,5,6,6,7]));
