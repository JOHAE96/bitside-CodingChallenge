module.exports = class Basket{
    products = [];
    deals = [];
    constructor(warehouse) {
        this.warehouse = warehouse
    }
    /**
     * add a Product by a given name to the basket
     * @param {string} productName 
     */
    scan(productName){
        this.addProduct(this.warehouse.getProduct(productName)[0]);
    }

    /**
     * add a given Product to the basket
     * @param {Product} product 
     */
    addProduct(product) {
       this.products.push(product);
    }

    /**
     * add a given Deal to the Basket, which apply at the getTotal function
     * @param {Deal} deal 
     */
    addDeal(deal){
        this.deals.push(deal);
    }

    /**
     * geturn the total price for all Products in the Basket, apply the deals. 
     * @returns Number
     */
    getTotal(){
        const list = this.applyDeals();
        let sum = 0;
        for(let i in list) {
            sum += list[i].price;
        }
        sum = parseFloat(sum.toFixed(2));
        return sum;
    }

    /**
     * print the products in the Basket and the applied Deals
     */
    printBasket(){
        const list = this.applyDeals();
        for(let i in list) {
            console.log(list[i].name, ":", list[i].price);
        }
        console.log("----------\nTotal:", this.getTotal());
    }

    /**
     * apply the deals tho Products in the Basket, withput modify them.
     * @returns Array with applied Deals
     */
    applyDeals(){
        let list = JSON.parse(JSON.stringify(this.products)); // Deep copy, dont modify the products in the Product.
        this.deals.forEach(deal => {
            list = deal.applyDeal(list);
        });
        return list;
    }
}