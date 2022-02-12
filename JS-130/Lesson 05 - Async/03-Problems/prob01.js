function startCounting() {
  let count = 1;
  var counting = setInterval( function() {
    console.log(count);
    count += 1;
  }, 1000);
  return counting;
}

function stopCounting(interval) {
  clearInterval(interval);
}

let id = startCounting();

setTimeout(() => stopCounting(id), 4500);