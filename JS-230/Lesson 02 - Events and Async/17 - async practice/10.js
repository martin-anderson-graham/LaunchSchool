//Without running the following code, what will it log to the console? When will the logged values appear on the console?

function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000);
  const b = await after1s(3, 2000);
  return input * a * b;
}

async function test2(input) {
  const a = await after1s(2, 1000);
  const b = await after1s(3, 1000);
  return input * a * b;
}

test1(2).then((value) => console.log(value));
test2(3).then((value) => console.log(value));

//18 after 2 seconds 
//12 after another 2 seconds