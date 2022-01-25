//Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

let repeat = (num, str) =>{
  let result = '';
  for(let i = 0; i < num; i++){
    result += str;
    }
  return result;
};

console.log(repeat(3, 'ha')); // 'hahaha'