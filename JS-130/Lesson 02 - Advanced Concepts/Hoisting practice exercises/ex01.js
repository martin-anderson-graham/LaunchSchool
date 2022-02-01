var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

/*The code displays
Bye
The entire function body gets hoisted to the top.  This goes first, but then
foo get reassigned by the `var` line.

hoisted version:
function foo() {}
var bar;
foo = function() {}
foo();