//Without running it, what will the following code log to the console? This problem may be a bit challenging.

const promise = new Promise(res => res(1));
promise
  .then((num) => {
    console.log(num);
    return num + 2;
  })
  .then((num) => {
    console.log(num);
    return num + 3;
  })
  .then((num) => {
    console.log(num);
    return num + 4;
  })
  .finally((num) => {
    console.log(num);
    return num + 5;
  });

// 1 3 6 undefined