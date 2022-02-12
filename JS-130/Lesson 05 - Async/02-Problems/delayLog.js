function delayLog() {
  for (let idx = 1; idx <= 10; idx += 1) {
    setTimeout( () => console.log(idx), idx * 1000);
  }
}

delayLog();