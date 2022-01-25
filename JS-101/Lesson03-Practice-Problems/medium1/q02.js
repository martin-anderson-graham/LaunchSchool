let munstersDescription = "The Munsters are creepy and spooky.";

let newStr = munstersDescription.split('').map( (val) => {
  if (val.toLowerCase() === val) {
    return val.toUpperCase();
  } else if (val.toUpperCase() === val) {
    return val.toLowerCase();
  } else {
    return val;
  }
}).join('');

console.log(newStr);