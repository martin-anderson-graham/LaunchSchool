//How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

let arr = [1,2,4];
let obj = {age:3};

function isArray(input) {
  if( typeof input === 'object'){
    if(input.length){
      return true;
    }
  }
  return false;  
}

console.log(isArray(arr));
console.log(isArray(obj));
console.log(isArray('32'));
console.log(isArray(32));

//I was just supposed to use Array.isArray()

