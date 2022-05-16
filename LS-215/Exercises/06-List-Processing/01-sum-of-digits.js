
function sum(num) {
  return num.toString().split('').reduce( (total, ele) => total + Number(ele), 0);
}

sum(23);           // 5
console.log('sum(23)', sum(23));
sum(496);          // 19
console.log('sum(496)', sum(496));
sum(123456789);    // 45
console.log('sum(123456789)', sum(123456789));