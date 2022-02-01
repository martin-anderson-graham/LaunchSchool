// Rewrite the code below using let instead of var. Your goal here is to change 
//the way the variables are declared without altering the output of the program.

function foo(condition) {
  let bar = undefined;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

/*
undefined
3.1415
42
undefined
0.5772
2.7183
undefined
42

*/