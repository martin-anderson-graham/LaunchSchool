//Without running it, what will the following code log to the console?

const test = Promise.reject("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();

// E B