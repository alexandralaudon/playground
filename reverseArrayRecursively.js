// How do you create a recursive version of a reversed array?

var revArray = function(array){
  if (array.length === 1) return array[0];
  return [array[array.length-1]].concat(revArray(array.slice(0,array.length-1)));
};

console.log(revArray([1,2,3,4,5,6,7,8,9,10]));
