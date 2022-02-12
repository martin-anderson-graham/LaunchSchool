function afterNSeconds(fn, sec) {
  setTimeout(fn, sec * 1000);
}

afterNSeconds(() => console.log('hi'), 2);