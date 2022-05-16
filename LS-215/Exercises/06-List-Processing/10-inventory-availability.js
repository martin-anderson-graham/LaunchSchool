function transactionsFor(id, transactions) {
  return transactions.filter( ele => id === ele.id);
}

function isItemAvailable(id, transactions) {
  let itemTransactions = transactionsFor(id, transactions);
  return itemTransactions.map( transaction => {
    if(transaction.movement === 'in') return transaction.quantity
    return transaction.quantity * -1;
    })
    .reduce( (sum, ele) => sum + ele, 0) > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true