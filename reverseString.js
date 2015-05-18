// write an algorithm to reverse a string

var reverseString = function(string) {
  return string.split('').reverse().join('');
};

console.log(reverseString("foobar"));
