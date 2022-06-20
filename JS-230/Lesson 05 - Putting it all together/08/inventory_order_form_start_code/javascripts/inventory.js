var inventory;

(function () {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function () {
      var date = new Date();
      document.querySelector("#order_date").textContent = date.toUTCString();
    },
    cacheTemplate: function () {
      let itemTemplate = document.getElementById('inventory_item').textContent;
      this.template = Handlebars.compile(itemTemplate);
    },
    add: function () {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function (idx) {
      this.collection = this.collection.filter(function (item) {
        return item.id !== idx;
      });
    },
    get: function (id) {
      var found_item;

      this.collection.forEach(function (item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function (node) {

      var id = this.findID(node);
      var item = this.get(id);

      item.name = node.querySelector("[name^=item_name]").value;
      item.stock_number = node.querySelector("[name^=item_stock_number]").value;
      item.quantity = node.querySelector("[name^=item_quantity]").value;
    },
    newItem: function (e) {
      e.preventDefault();
      var item = this.add();
      var valObj = {
        id: item.id,
        idLabel: `item_id_${item.id}`,
        nameLabel: `item_name_${item.id}`,
        stockLabel: `item_stock_number_${item.id}`,
        quantityLabel: `item_quantity_${item.id}`,
      }

      let inventoryTable = document.querySelector("#inventory");
      if (!inventoryTable.firstElementChild) {
        inventoryTable.appendChild(document.createElement('tbody'));
      }

      var tbody = document.createElement('tbody');
      tbody.innerHTML = this.template(valObj);
      inventoryTable.appendChild(tbody.firstElementChild);

    },
    findParent: function (e) {
      let node = e.target;
      while (node.tagName.toLowerCase() !== 'tr' && node !== document.body) {
        node = node.parentNode;
      }
      return node;
    },
    findID: function (item) {
      return +item.querySelector("input[type=hidden]").value;
    },
    deleteItem: function (e) {
      if (e.target.tagName === 'A' && e.target.classList.contains('delete')) {
        e.preventDefault();
        let parent = this.findParent(e);
        parent.remove();
        this.remove(this.findID(parent));
      }
    },
    updateItem: function (e) {
      let tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') {
        var item = this.findParent(e);
        this.update(item);
      }
    },
    bindEvents: function () {
      document.getElementById("add_item").addEventListener('click', this.newItem.bind(this));
      document.getElementById("inventory").addEventListener('click', this.deleteItem.bind(this));
      document.getElementById("inventory").addEventListener('change', this.updateItem.bind(this));


      // $("#add_item").on("click", $.proxy(this.newItem, this));
      // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
    },
    init: function () {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', inventory.init.bind(inventory))

