var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.price = price;
        this.name = name;
    }
    Product.prototype.changePrice = function (newPrice) {
        this.price = newPrice;
    };
    Product.prototype.getInfo = function () {
        return {
            price: this.price,
            name: this.name,
        };
    };
    return Product;
}());
var Order = /** @class */ (function () {
    function Order(orderProducts) {
        this.products = orderProducts;
        this.status = 'created';
        this.createdDate = new Date();
        this.id = this.createdDate.getTime();
    }
    Order.prototype.setStatus = function (status) {
        this.status = status;
    };
    Order.prototype.getInfo = function () {
        console.log({
            products: this.products,
            status: this.status,
            createdDate: this.createdDate.toString(),
            id: this.id,
        });
    };
    return Order;
}());
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.orders = [];
    }
    OrderManager.prototype.addOrder = function (order) {
        this.orders.push(order);
    };
    OrderManager.prototype.removeOrder = function (id) {
        this.orders = this.orders.filter(function (order) { return order.id !== id; });
    };
    OrderManager.prototype.getOrder = function (id) {
        return this.orders.find(function (order) { return order.id !== id; });
    };
    OrderManager.prototype.getOrders = function () {
        return this.orders;
    };
    return OrderManager;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.addProduct = function (name, price) {
        var newProduct = new Product(name, price);
        this.products.push(newProduct);
    };
    ProductManager.prototype.deleteProduct = function (name) {
        this.products = this.products.filter(function (product) { return product.name !== name; });
    };
    ProductManager.prototype.getProducts = function () {
        return this.products;
    };
    ProductManager.prototype.getProductByName = function (name) {
        var product = this.products.find(function (item) { return item.name === name; });
        if (!product) {
            console.log(name, 'товар не найден');
            return null;
        }
        return product;
    };
    return ProductManager;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.orderProducts = [];
    }
    Cart.prototype.addProduct = function (product) {
        var isAlreadyInCard = this.orderProducts.find(function (item) { return item.product === product; });
        if (isAlreadyInCard) {
            isAlreadyInCard.count++;
        }
        else {
            this.orderProducts.push({
                product: product,
                count: 1,
            });
        }
    };
    Cart.prototype.removeProduct = function (product) {
        this.orderProducts = this.orderProducts.filter(function (item) { return item.product !== product; });
    };
    Cart.prototype.getCartInfo = function () {
        console.log(this.orderProducts);
    };
    Cart.prototype.createOrder = function (orderManager) {
        var newOrder = new Order(__spreadArray([], this.orderProducts, true));
        this.orderProducts = [];
        orderManager.addOrder(newOrder);
        return newOrder.id;
    };
    return Cart;
}());
var productManager = new ProductManager();
var orderManager = new OrderManager();
var cart = new Cart();
productManager.addProduct('колбаса', 100);
productManager.addProduct('молоко', 80);
productManager.addProduct('хлеб', 20);
console.log(productManager.getProducts());
productManager.deleteProduct('молоко');
productManager.addProduct('рыба', 200);
console.log(productManager.getProducts());
var product1 = productManager.getProductByName('колбаса');
var product2 = productManager.getProductByName('молоко');
var product3 = productManager.getProductByName('хлеб');
var product4 = productManager.getProductByName('рыба');
if (product1)
    cart.addProduct(product1);
if (product3)
    cart.addProduct(product3);
if (product4)
    cart.addProduct(product4);
if (product4)
    cart.addProduct(product4);
if (product4)
    cart.addProduct(product4);
cart.getCartInfo();
if (product3)
    cart.removeProduct(product3);
cart.getCartInfo();
var newOrderId = cart.createOrder(orderManager);
console.log(orderManager.getOrders());
var order = orderManager.getOrder(newOrderId);
order === null || order === void 0 ? void 0 : order.setStatus('processing');
order === null || order === void 0 ? void 0 : order.getInfo();
order === null || order === void 0 ? void 0 : order.setStatus('completed');
order === null || order === void 0 ? void 0 : order.getInfo();
orderManager.removeOrder(newOrderId);
console.log(orderManager.getOrders());
