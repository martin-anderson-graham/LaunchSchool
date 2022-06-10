//Without running it, what will the following code log to the console?

const promise = new Promise((resolve, reject) => {
  console.log("foo");
  reject();
  console.log("bar");
});

promise
  .then(() => {
    console.log("baz");
  })
  .catch(() => {
    console.log("qux");
  });

console.log("abc");

//foo - bar - abc - qux