function twoNumberProducts(array) {
  let products = [];
  // Outer array:
  for (let i = 0; i < array.length - 1; i++) {
    // Inner array, in which j always begins one index
    // to the right of i:
    for (let j = i + 1; j < array.length; j++) {
      products.push(array[i] * array[j]);
    }
  }
  return products;
}
