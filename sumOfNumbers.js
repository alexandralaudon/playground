// Taken from https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour

// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
var sumNumbersForLoop = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

console.log(sumNumbersForLoop([1,2,3,4,5,6]));


var sumNumbersWhileLoop = function(array) {
  var sum = 0;
  var i = 0;

  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
};

console.log(sumNumbersWhileLoop([1,2,3,4,5,6]));

var sumNumbersRecursion = function(array) {
  if (array.length === 1) return array[0];
  return array[0] + sumNumbersRecursion(array.slice(1));
};

console.log(sumNumbersForLoop([1,2,3,4,5,6]));
