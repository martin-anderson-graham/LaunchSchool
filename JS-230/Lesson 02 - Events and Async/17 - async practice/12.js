//Without running the following code, what will it log to the console?

const test = Promise.resolve("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();

//A B