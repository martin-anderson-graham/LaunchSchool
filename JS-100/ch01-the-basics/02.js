//given n is four digits
let digits = function(n) {
  let num = n;
  let digit1 = parseInt(num % 10);
  num /= 10;
  let digit2 = parseInt(num % 10);
  num /= 10;
  let digit3 = parseInt(num % 10);
  num /= 10;
  let digit4 = parseInt(num % 10);

  console.log(`Digits are ${digit4}, ${digit3}, ${digit2}, ${digit1}.`)
}

digits(1023);