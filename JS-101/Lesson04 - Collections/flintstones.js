let toObj = (arr) => {
  let result = {};
  arr.forEach( function(val, idx) {
    result[val] = idx;
  });
  console.log(result);
  return result;
};

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
toObj(flintstones);
