let numberRange = (num) =>{
  if(num >= 0 && num <= 50){
    console.log(`${num} is between 0 and 50 inclusive.`)
    return;
  }
  else if(num >= 51 && num <= 100){
    console.log(`${num} is between 51 and 100 inclusive.`);
  }
  else if(num > 100){
    console.log(`${num} is greater than 100.`);
  }
  else if(num < 0){
    console.log(`${num} is less than zero.`);
  }
}


numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);