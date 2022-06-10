const collection = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.asyncIterator]() {
    const keys = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              value: this[keys[i++]],
              done: i > keys.length
            });
          }, 1000);
        })
      }
    }
  }
}

let str = 'hi';

let obj = { [str.repeat(2)]:true};

console.log(obj);

const iterator = collection[Symbol.asyncIterator]();

(async function () {
  for await (let value of collection) {
    console.log(value);
  }
})();