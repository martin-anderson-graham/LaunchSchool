let isNotANumber = (value) =>{
  console.log(value);
  console.log(typeof value)
  if(value !== value){
    return true;
  }  
  return false;
};

var testNan = NaN;
console.log(typeof testNan);

console.log(isNotANumber(3));
console.log(isNotANumber("hi"));
console.log(isNotANumber(testNan));
console.log(isNotANumber(NaN));


