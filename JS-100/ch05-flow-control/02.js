let evenOrOdd = (num) => {
  if(!Number.isInteger(num)){
    console.log('Error - submit an integer.');
    return;
  }

  if(num % 2 === 0){
    console.log('even');
  }
  else{
    console.log('odd');
  }
};

evenOrOdd(3.2);
evenOrOdd(4);