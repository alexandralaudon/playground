//In an array the integers 1-100 are stored, but one number is missing how do you find it?

var arrayReturn = function(limit) {
  var array = [];
  for (var i = 0; i < limit; i++) {
    array[i] = i+1;
  }
  return array;
};

var removeElemFromArray = function(array,skip){
  var changedArray = array;
  delete changedArray[skip-1];
  return changedArray.filter(function(elem){
    return elem !== undefined;
  });
};

var oneNumberMissing = function(limit, skip) {
  var array = removeElemFromArray(arrayReturn(100), skip),
      total = limit*(limit+1)/2,
      arrayTotal = array.reduce(function(sum,elem){return sum + elem;});

  return total - arrayTotal;
};

console.log(oneNumberMissing(100,54));
