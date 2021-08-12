class Product{
    
    static howManyProducts = 0;
    
    constructor( name, price ){
        this._productId = ++Product.howManyProducts;
        this._name = name;
        this._price = price;
    }

    get productId(){
        return this._productId;
    }

    set productId( newId ){
        this._productId = newId;
    }

    get name(){
        return this._name;
    }

    set name( newName ){
        this._name = newName;
    }

    get price(){
        return this._price;
    }

    set price( newPrice ){
        this._price = newPrice;
    }

    toString(){
        return `product Id: ${this._productId}, name: ${this._name}, price: ${this._price}`
    }

}

class Order{
    static howManyOrders = 0;

    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._orderId = ++Order.howManyOrders;
        this._products = [];
        this._howManyProductsAreAdded = 0;
    }

    get orderId(){
        return this._orderId;
    }

    addProduct( product ){
        if( this._products.length < Order.MAX_PRODUCTS ){
            this._products.push( product );
            this._howManyProductsAreAdded++;
        }
        else{
            console.log( 'More products cannot be added' );
        }
    }

    calculateTotal(){
        let totalSales = 0;
        for( let product of this._products ){
            totalSales += product.price;
        }
        return totalSales;
    }

    showOrder(){
        let productsInOrder = '';
        for( let product of this._products ){
            productsInOrder += '\n' + '{ ' + product.toString() + ' }';
        }
        console.log(`Order: ${this._orderId}, Total: $${this.calculateTotal()}, Products: ${productsInOrder}`);
    }

}

let product1 = new Product('pants', 200);
let product2 = new Product('shirt', 100);
console.log( product1.toString() );
console.log( product2.toString() );

let order1 = new Order(); 
order1.addProduct( product1 );
order1.addProduct( product2 );
order1.showOrder();

let product3 = new Product( 'belt', 50 );
let order2 = new Order();
order2.addProduct( product1 );
order2.addProduct( product2 );
order2.addProduct( product3 );
order2.addProduct( product3 );

order2.showOrder();