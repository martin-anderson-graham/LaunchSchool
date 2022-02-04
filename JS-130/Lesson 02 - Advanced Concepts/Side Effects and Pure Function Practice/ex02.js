// Which are pure functions?

//no - side effect
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// yes - always returns undefined?
function sum(a, b) {
  a + b;
}

// yes - always returns the same output given the same input 
//(assuming ) a and b are numbers
function sum(a, b) {
  return a + b;
}

// no - Math.random is an IO call - also inconsistent return
function sum(a, b) {
  return a + b + Mat
  h.random();
}

// yes - always returns the same value
function sum(a, b) {
  return 3.1415;
}