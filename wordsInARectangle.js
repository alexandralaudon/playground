//Write a function, wordsInARectangle that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

//Third Version
var wordsInARectangle = function(array) {
  var width = array.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;
  var topBottom = '*'.repeat(width*2) + '\n';
  var result = '\n' + topBottom;

  function loopingThrough(arr){
    var extraLength = " ".repeat(width - arr[0].length);
    result += "* " + String(arr[0]) + extraLength +  "  *\n";
    return arr.length == 1 ? result : loopingThrough(arr.slice(1));
  }

  loopingThrough(array);
  result += topBottom;
  return result;
};

console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));


//Second Version
// var wordsInARectangle = function(array) {
//   var width = array.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;
//   var topBottom = '*'.repeat(width*2) + '\n';
//   var result = '\n' + topBottom;
//
//   function loopingThrough(arr){
//     var extraEndLength = " ".repeat(width - arr[0].length);
//     result += "* " + String(arr[0]) + extraEndLength +  "  *\n";
//     if (arr.length === 1) {
//       result += topBottom;
//       return result;
//     }
//     return loopingThrough(arr.slice(1));
//   }
//
//   loopingThrough(array);
//   return result;
// };
//
//
// console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));


// Original Version
// var wordsInARectangle = function(array) {
//   var width = array.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;
//   var result = '\n';
//   var topBottom = "*".repeat(width*2) + '\n';
//   result += topBottom;
//   array.forEach(function(elem){
//     var extraEndLength = " ".repeat(width - elem.length);
//     result += "* " + String(elem) + extraEndLength +  "  *\n";
//   });
//   result += topBottom;
//
//   return result;
// };
//
//
// console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));
