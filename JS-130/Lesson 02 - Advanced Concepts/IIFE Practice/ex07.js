(function foo(number) {
  if (number < 0) {
    return;
  }
  console.log(number);
  foo(number - 1);
})(7);