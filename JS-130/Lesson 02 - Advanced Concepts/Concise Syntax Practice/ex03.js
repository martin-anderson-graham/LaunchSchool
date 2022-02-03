/*
Rewrite the following code using classic JavaScript syntax:
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);
*/

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}
let obj = foo(1, 2, 3);
let baz = obj.baz;
let qux = obj.qux;
let bar = obj.bar;
