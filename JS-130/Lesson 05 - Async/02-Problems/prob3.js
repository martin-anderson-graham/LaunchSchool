setTimeout(function() {   //1
  console.log('Once');    //5
}, 1000);

setTimeout(function() {   //2
  console.log('upon');    //7
}, 3000);

setTimeout(function() {   //3
  console.log('a');       //6
}, 2000);

setTimeout(function() {   //4
  console.log('time');    //8
}, 4000);