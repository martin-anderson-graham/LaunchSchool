(function foo() {
  console.log('Bar');
})();

foo() // ?

//foo is not accessible in the global scope.  since lines 1-3 are a function
//expression, they must be saved to another variable to be used