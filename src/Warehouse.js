const Basket = require('./Basket');

module.exports = class Warehouse{
    inventory = [];
    constructor(inventory = []){
        this.inventory = inventory;
    }

    /**
     * add Product to the Warehouse
     * @param {Product} product 
     */
    addProduct(product) {
        this.inventory.push(product);
    }

    /**
     * return a Product (name and price) by a given namen
     * @param {string} productName 
     * @returns Product
     */
    getProduct(productName) {
        return this.inventory.filter( product => product.name == productName)
    }

    createBasket(){
        return new Basket(this);
    }
}