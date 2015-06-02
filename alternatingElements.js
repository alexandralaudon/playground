// Write a function, alternatingElements, that combines two lists by alternatingly taking elements:

var alternatingElements = function(array1,array2) {
  var combinedResult = [];
  for (var i = 0; i < array1.length; i++) {
    combinedResult.push(array1[i]);
    combinedResult.push(array2[i]);
  }
  return combinedResult;
};

console.log(alternatingElements(['a','b','c'], [1,2,3]));
// ['a',1,'b',2,'c',3]
