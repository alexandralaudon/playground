// Recall the definition of a set; a collection of distinct elements. Write a constructor that takes an Array as an argument and has two methods, asSet which returns a representation of the input array as a set (e.g. with duplicates removed) and toString which returns a string of the elements in the set enclosed in { and separated by commas. Sample usage would be as so:

function Set(array){
  this.array = array;
}

Set.prototype.asSet = function(){
  var that = this;
  return this.array.filter(function(elem, index){
    return that.array.indexOf(elem) == index;
  });
};

Set.prototype.toString = function(){
  return "{" + this.asSet().join(",") + "}";
};


var set = new Set([11,2,3,4,2,2,4,3]);
console.log(set.asSet()); // [11,2,3,4]
console.log(set.toString()); // {11, 2, 3, 4}

var wordSet = new Set(['foo', 'foo', 'bar', 'bar', 'baz', 'ski', 'bar', undefined, undefined]);
console.log(wordSet.asSet()); // ['foo','bar', 'baz', 'ski', undefined]
console.log(wordSet.toString()); // {'foo','bar', 'baz', 'ski', }
