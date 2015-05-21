var reverseWords = function(string){
  return string.split(" ").reverse().join(" ");
};

console.log(reverseWords("This s3nt3nce. is awesome.ly awesome# %forRealz"));

var addition = function(string){
  return string.split("+").reduce(function(sum,elem){
    return sum + Number(elem);
  },0);
};


console.log(addition("1+2+10+12+20+22"));

var multiplication = function(string){
  return string.split("*").reduce(function(sum,elem){
    return sum * Number(elem);
  });
};

console.log(multiplication("1*2*10*12*20*22"));

var mixedOps = function(string){
  return addition(string.split('+').map(multiplication).join('+'));
};

console.log(mixedOps("1*2*10+12*20*22"));
