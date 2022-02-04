let ItemCreator = (function () {

  function isValidName(itemName) {
    return itemName.replace(" ", "").length >= 5;
  }

  function isValidQuantity(quantity) {
    return quantity !== undefined;
  }

  function isValidCategory(category) {
    if (category.indexOf(' ') !== -1) {
      return false;
    } else if (category.replace(" ", '').length < 5) {
      return false;
    } else {
      return true;
    }
  }

  function createSKU(itemName, category) {
    return `${itemName.replace(" ", "").slice(0, 3)}${category.slice(0, 2)}`
      .toUpperCase();
  }

  return function (itemName, category, quantity) {
    if (isValidCategory(category)
      && isValidName(itemName)
      && isValidQuantity(quantity)) {
      return {
        itemName,
        category,
        quantity,
        skuCode: createSKU(itemName, category),
      };
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let item = ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
      return true;
    }
  },
  getItem(skuCode) {
    return this.items.find(item => item.skuCode === skuCode);
  },
  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },
  update(skuCode, updateObj) {
    Object.assign(this.getItem(skuCode), updateObj);
  },
  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
  delete(skuCode) {
    this.items.splice(
      this.items.findIndex(item => item.skuCode === skuCode), 1);
  },
};

let ReportManager = (function () {
  return {
    init(itemManagerObj) {
      this.items = itemManagerObj;
      return this;
    },
    reportInStock() {
      return this.items.inStock()
        .forEach(item => console.log(item.itemName));
    },
    createReporter(skuCode) {
      let referencedItem = this.items.getItem(skuCode);
      return {
        itemInfo() {
          Object.keys(referencedItem).forEach(key => {
            console.log(`${key}: ${referencedItem[key]}`);
          });
        },
      };
    }
  };
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);
ItemManager.items.forEach(item => console.log(item));

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();
console.log("");
ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(...ItemManager.inStock());
// // football,kitchen pot
console.log("");
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log("");
ItemManager.itemsInCategory('sports').forEach(item => console.log(item));

ItemManager.delete('SOCSP');
//returns list the remaining 3 valid items(soccer ball is removed from the list)
console.log("");
ItemManager.items.forEach(item => console.log(item));

let kitchenPotReporter = ReportManager.createReporter('KITCO');
console.log("");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
console.log("");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10