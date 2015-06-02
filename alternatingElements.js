// Write a function, alternatingElements, that combines two lists by alternatingly taking elements:

var alternatingElements = function(array1,array2) {
  var max = Math.max(array1.length, array2.length);
  var combinedResult = [];
  for (var i = 0; i < max; i++) {
    if (array1[i] !== undefined) combinedResult.push(array1[i]);
    if (array1[i] !== undefined) combinedResult.push(array2[i]);
  }
  return combinedResult;
};

console.log(alternatingElements(['a','b','c'], [1,2,3]));
// ['a',1,'b',2,'c',3]
