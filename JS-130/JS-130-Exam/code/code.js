let a = 3;
try {
  a += 1;
  throw new Error();
  a += 2;
} catch {
  console.log(a); //4
}
console.log(a);