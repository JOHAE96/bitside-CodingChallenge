const Deal = require("./Deal");
module.exports = class TenPercentDeal extends Deal{
    constructor(productName){
        super(productName);
    }

    /**
     * Modify the Basket: reduze the price for the products with the given Name 
     * @param {Array<Product>} basket 
     * @returns  {Array<Product>}
     */
    applyDeal(basket) {
        basket.map((x)=>{
            if(x.name === this.productName) {
                x.price = parseFloat((x.price * 0.9).toFixed(2));
            }
        })
        return basket;
    }
}