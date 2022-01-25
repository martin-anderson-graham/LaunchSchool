// teh issue is that each call to discount is permanently modifying the price
// of the item object (we are not using it as a constructor!)

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    // this.price -= discount;

    return this.price - discount;
  },
};

console.log(item.discount(20));   // should return 40
// 40
console.log(item.discount(50));  // should return 25
// 20
console.log(item.discount(25));  // should return 37.5
// 15