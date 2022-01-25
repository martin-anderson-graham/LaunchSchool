let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let arr = [];
arr = arr.concat(...flintstones);

console.log(...flintstones);
arr = arr.concat('1','2');
console.log(arr);

arr = arr.concat(['1','2']);