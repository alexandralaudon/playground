// Taken from https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour

// Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

var combineTwoLists = function(array1, array2){
  if (array1.length === 1) return [array1[0], array2[0]];
  return [array1[0], array2[0]].concat(combineTwoLists(array1.slice(1), array2.slice(1)));
};

console.log(combineTwoLists(["a", "b", "c"], [1, 2, 3]));
