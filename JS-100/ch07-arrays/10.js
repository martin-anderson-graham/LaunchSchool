let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];


arr[1][3] = 606;

arr.forEach(element => console.log(element));