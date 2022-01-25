//Write a while loop that logs all odd natural numbers between 1 and 40.

let count = 1;

while ( count <= 40) {
  if ( count % 2 !== 0){
    console.log(count);
  }
  count++;
}