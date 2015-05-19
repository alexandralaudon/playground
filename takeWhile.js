// Write a JavaScript function with the signature takeWhile(array, takingFn) that behave's like Ruby's Enumberable#take_while.

// Made it recursive, sweet!

var takeWhile = function(array,takingFn){
  if (takingFn(array[0]) === false) return [];
  return [array[0]].concat(takeWhile(array.slice(1), takingFn));
};

var lessThanFive = function(elem){
  return elem < 5;
};

console.log(takeWhile([1,2,3,4,5,6,7,8], lessThanFive));
