const Basket = require('./Basket');
const Product = require('./Product');
const Warehouse = require('./Warehouse');
const TenPercentDeal = require("./TenPercentDeal")
const TwoForOneDeal = require("./TwoForOneDeal")

const p1 = new Product("A0001", 12.99);
const p2 = new Product("A0002", 3.99);

const warehouse = new Warehouse([p1, p2]);

const basket = warehouse.createBasket();
const basket2 = warehouse.createBasket();


const tenPercentDeal = new TenPercentDeal("A0001");
const twoForOneDeal = new TwoForOneDeal("A0002");

basket.scan("A0001");
basket.scan("A0002");
basket.scan("A0002");
basket.scan("A0002");
basket.scan("A0002");
basket.addDeal(tenPercentDeal);
basket.addDeal(twoForOneDeal);

basket2.addProduct(p1);
basket2.addProduct(p1);
basket2.addProduct(p2);
basket2.addDeal(tenPercentDeal);

basket.printBasket();
console.log("Total Price: ", basket2.getTotal());
//console.log(basket.products);