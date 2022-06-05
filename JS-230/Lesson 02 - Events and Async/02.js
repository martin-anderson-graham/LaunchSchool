function startCounting() {
  let num = 1;
  return setInterval( () => {
    console.log(num);
    num += 1;
  }, 1000);
}

function stopCounting(){
  clearInterval(id);
}

let id = startCounting();

setTimeout(stopCounting, 6500);