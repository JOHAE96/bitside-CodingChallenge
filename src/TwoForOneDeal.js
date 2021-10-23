const Basket = require("./basket");
const Deal = require("./Deal");
const Product = require("./Product");
module.exports = class TwoForOneDeal extends Deal{
    constructor(productName){
        super(productName);
    }

    /**
     * Modify the Basket: add a Discount Product to the Basket for each second Product with the given Name.
     * @param {Array<Product>} basket 
     * @returns  {Array<Product>}
     */
    applyDeal(basket) {
        const filterdProducts = basket.filter( product => product.name == this.productName)
        const freeProducts = Math.floor(filterdProducts.length / 2);
        if (freeProducts == 0) return basket; // nothing todo
        const price = (-1) *filterdProducts[0].price;
        for (let i = 0; i<freeProducts; ++i) {
            basket.push(new Product("free-"+ this.productName, price));
        }
        return basket;
    }
}