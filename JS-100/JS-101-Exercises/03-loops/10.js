//What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

// A

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// B


let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

//the first will not execute (the while condition is false)
//the second will execute once (do..while)