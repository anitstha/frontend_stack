//arrays methods
//map, filter, find, some, every
//reduce, sort, include, slice, some

const products = [
  { id: 1, name: "Keyboard", price: 1500, category: "Accessories", stock: 10 },
  { id: 2, name: "Mouse", price: 800, category: "Accessories", stock: 0 },
  { id: 3, name: "Monitor", price: 12000, category: "Electronics", stock: 5 },
  { id: 4, name: "Headphones", price: 2500, category: "Accessories", stock: 3 },
  { id: 5, name: "Laptop", price: 85000, category: "Electronics", stock: 0 },
];

//1. Create a new array containing only the names of products whose names are converted to uppercase.
/*
const productsName = products.map((item) => {
  return item.name.toUpperCase();
});

console.log(productsName);


2. Create a new array containing only products that are in stock (stock greater than 0).
Use:
- filter()
- An arrow function
- Store the result in inStockProducts

const availableProducts = products.filter((item) => {
    return item.stock > 0;
})
console.log(availableProducts);

//3. Using the same products array, create a new array containing only the names of products priced below 10,000, converted to uppercase.

const affordableProductNames = products.filter((item) => {
    return item.price < 10000;
});

const affordableProductNamesUppercase = affordableProductNames.map((item) => {
    return item.name.toUpperCase();
});

console.log(affordableProductNamesUppercase);

//Using the same products array, find the first product that costs more than 20,000.
const expensiveProduct = products.find((item) => {
    return item.price > 20000;
});

const expensiveProductName = expensiveProduct.name;
console.log(expensiveProductName);

//Using the same products array, check whether at least one product is out of stock (stock === 0).
const hasOutOfStockProducts = products.some((item) => {
    return item.stock === 0;
});
console.log(hasOutOfStockProducts);
*/
