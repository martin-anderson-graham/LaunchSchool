var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

/* logs
error? (nope, NaN)

Hoisted version:
function foo() {
  var bar;
  bar = bar  - 42;
  console.log(bar);
}

var bar;
bar = 82;
foo();



*/