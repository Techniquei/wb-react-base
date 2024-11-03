class Product {
    price: number;
    name: string;

    constructor(name: string, price: number) {
        this.price = price;
        this.name = name;
    }

    changePrice(newPrice: number) {
        this.price = newPrice;
    }

    getInfo() {
        return {
            price: this.price,
            name: this.name,
        }
    }
}


interface OrderProduct {
    product: Product,
    count: number,
}

type OrderStatus = 'created' | 'processing' | 'completed';

class Order {
    products: OrderProduct[];
    status: OrderStatus;
    createdDate: Date;
    id: number;

    constructor(orderProducts: OrderProduct[]) {
        this.products = orderProducts;
        this.status = 'created';
        this.createdDate = new Date();
        this.id = this.createdDate.getTime();
    }

    setStatus(status: OrderStatus) {
        this.status = status;
    }

    getInfo() {
        console.log({
            products: this.products,
            status: this.status,
            createdDate: this.createdDate.toString(),
            id: this.id,
        });
    }
}

class OrderManager {
    private orders: Order[] = [];

    addOrder(order: Order) {
        this.orders.push(order);
    }

    removeOrder(id: number) {
        this.orders = this.orders.filter(order => order.id !== id);
    }

    getOrder(id: number) {
        return this.orders.find(order => order.id !== id);
    }

    getOrders() {
        return this.orders;
    }
}

class ProductManager {
    private products: Product[] = [];

    addProduct(name:string, price: number) {
        const newProduct = new Product(name, price);
        this.products.push(newProduct);
    }

    deleteProduct(name: string) {
        this.products = this.products.filter(product => product.name !== name);
    }

    getProducts() {
        return this.products;
    }

    getProductByName(name: string) {
        const product = this.products.find(item => item.name === name);

        if (!product) {
            console.log(name, 'товар не найден');
            return null;
        }

        return product;
    }
}

class Cart {
    orderProducts: OrderProduct[] = [];

    addProduct(product: Product) {
        const isAlreadyInCard = this.orderProducts.find(item => item.product === product);

        if (isAlreadyInCard) {
            isAlreadyInCard.count++;
        } else {
            this.orderProducts.push({
                product,
                count: 1,
            })
        }
    }

    removeProduct(product: Product) {
        this.orderProducts = this.orderProducts.filter(item => item.product !== product);
    }

    getCartInfo() {
        console.log(this.orderProducts);
    }

    createOrder(orderManager: OrderManager) {
        const newOrder = new Order([...this.orderProducts])
        this.orderProducts = [];

        orderManager.addOrder(newOrder);

        return newOrder.id;
    }
}

const productManager = new ProductManager();
const orderManager = new OrderManager();
const cart = new Cart();

productManager.addProduct('колбаса', 100);
productManager.addProduct('молоко', 80);
productManager.addProduct('хлеб', 20);

console.log(productManager.getProducts());

productManager.deleteProduct('молоко');
productManager.addProduct('рыба', 200);

console.log(productManager.getProducts());

const product1 = productManager.getProductByName('колбаса');
const product2 = productManager.getProductByName('молоко');
const product3 = productManager.getProductByName('хлеб');
const product4 = productManager.getProductByName('рыба');

if (product1) cart.addProduct(product1);
if (product3) cart.addProduct(product3);
if (product4) cart.addProduct(product4);
if (product4) cart.addProduct(product4);
if (product4) cart.addProduct(product4);

cart.getCartInfo()

if (product3) cart.removeProduct(product3);

cart.getCartInfo()

const newOrderId = cart.createOrder(orderManager);
console.log(orderManager.getOrders());

const order = orderManager.getOrder(newOrderId);

order?.setStatus('processing');
order?.getInfo();

order?.setStatus('completed');
order?.getInfo();

orderManager.removeOrder(newOrderId);
console.log(orderManager.getOrders());


