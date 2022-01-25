let transactionsFor = (idval, arr) => {
  return arr.filter( val => val.id === idval);
};

let isItemAvailable = (idval, arr) => {
  let sum = transactionsFor(idval, arr).reduce( (accumulator, obj) => {
    if (obj.movement === 'in') {
      return accumulator + obj.quantity;
    } else if (obj.movement === 'out') {
      return accumulator - obj.quantity;
    } else {
      return 0;
    }
  }, 0);
  console.log(sum > 0);
  return sum > 0;
};


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true