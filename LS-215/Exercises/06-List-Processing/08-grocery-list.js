function buyFruit(orderArr) {
  return orderArr.reduce ( (result, itemArr) => {
    for( let i = 0; i < itemArr[1]; i += 1) {
      result.push(itemArr[0])
    }
    return result;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]