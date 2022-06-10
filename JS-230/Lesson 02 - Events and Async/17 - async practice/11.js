//Without running the following code, what will it log to the console?

const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

async function test2() {
  console.log(await testPromise());
  console.log("2");
}

test1();
test2();

//2 1 1 2 