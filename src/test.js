const Product = require('./Product');
const Warehouse = require('./Warehouse');
const TenPercentDeal = require("./TenPercentDeal")
const TwoForOneDeal = require("./TwoForOneDeal") 

test('basket with 1 product without deals', () => {
    const p1 = new Product("A0001", 12.99);
    const warehouse = new Warehouse([p1]);
    const basket = warehouse.createBasket();
    basket.scan("A0001");
    expect(basket.getTotal()).toBe(12.99);
  });

  test('empty basket', () => {
    const warehouse = new Warehouse();
    const basket = warehouse.createBasket();
    expect(basket.getTotal()).toBe(0);
  });

  test('basket with 2 product without deals', () => {
    const p1 = new Product("A0001", 12.99);
    const p2 = new Product("A0002", 3.99);
    const warehouse = new Warehouse([p1, p2]);
    const basket = warehouse.createBasket();
    basket.scan("A0001");
    basket.scan("A0002");
    expect(basket.getTotal()).toBe(16.98);
  });

  test('basket with 2 product and 10% Deal on 1 product', () => {
    const p1 = new Product("A0001", 12.99);
    const p2 = new Product("A0002", 3.99);
    const warehouse = new Warehouse([p1, p2]);
    const basket = warehouse.createBasket();
    const tenPercentDeal = new TenPercentDeal("A0001"); 
    basket.addDeal(tenPercentDeal);
    basket.scan("A0001");
    basket.scan("A0002");
    expect(basket.getTotal()).toBe(15.68);
  });

  test('empty basket and 2For1Deal', () => {
    const warehouse = new Warehouse();
    const basket = warehouse.createBasket();
    const twoForOneDeal = new TwoForOneDeal("A0001");
    basket.addDeal(twoForOneDeal);
    expect(basket.getTotal()).toBe(0);
  }); 

  test('basket with 1 product and 2For1Deal', () => {
    const p1 = new Product("A0001", 12.99);
    const warehouse = new Warehouse([p1]);
    const basket = warehouse.createBasket();
    const twoForOneDeal = new TwoForOneDeal("A0001");
    basket.addDeal(twoForOneDeal);
    basket.scan("A0001");
    expect(basket.getTotal()).toBe(12.99);
  });

  test('basket with 2 product and 2For1Deal', () => {
    const p1 = new Product("A0001", 12.99);
    const warehouse = new Warehouse([p1]);
    const basket = warehouse.createBasket();
    const twoForOneDeal = new TwoForOneDeal("A0001");
    basket.addDeal(twoForOneDeal);
    basket.scan("A0001");
    basket.scan("A0001");
    expect(basket.getTotal()).toBe(12.99);
  });

  test('basket with 3 product and 2For1Deal', () => {
    const p1 = new Product("A0001", 12.99);
    const warehouse = new Warehouse([p1]);
    const basket = warehouse.createBasket();
    const twoForOneDeal = new TwoForOneDeal("A0001");
    basket.addDeal(twoForOneDeal);
    basket.scan("A0001");
    basket.scan("A0001");
    basket.scan("A0001");
    expect(basket.getTotal()).toBe(25.98);
  });

  test('basket with 4 product and 2For1Deal', () => {
    const p1 = new Product("A0001", 12.99);
    const warehouse = new Warehouse([p1]);
    const basket = warehouse.createBasket();
    const twoForOneDeal = new TwoForOneDeal("A0001");
    basket.addDeal(twoForOneDeal);
    basket.scan("A0001");
    basket.scan("A0001");
    basket.scan("A0001");
    basket.scan("A0001");
    expect(basket.getTotal()).toBe(25.98);
  });


  test('basket with 3 product, 2For1Deal and 10% Deal', () => {
    const p1 = new Product("A0001", 12.99);
    const p2 = new Product("A0002", 3.99);
    const warehouse = new Warehouse([p1, p2]);
    const basket = warehouse.createBasket();
    const tenPercentDeal = new TenPercentDeal("A0001");
    const twoForOneDeal = new TwoForOneDeal("A0002");

    
    basket.addDeal(tenPercentDeal);
    basket.addDeal(twoForOneDeal);
    basket.scan("A0001");
    basket.scan("A0002");
    basket.scan("A0002");
    expect(basket.getTotal()).toBe(15.68);
  });
