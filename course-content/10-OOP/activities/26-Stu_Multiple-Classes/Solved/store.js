class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  processProductSale(name) {
    this.stock.forEach(item => {
      if (item.name === name) {
        if (item.count > 0) {
          // DONE: Decrement the store's stock of item
          // DONE: Increase the store's revenue
          item.count--;
          this.revenue += item.price;
          console.log(`Purchased ${item.name} for ${item.price}`);
        } else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }

  replenishStock(name, count) {
    this.stock.forEach(item => {
      if (item.name === name) {
        // DONE: Increase the store's stock of item
        item.count += count;
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
