//Check if every product is in stock AND some product costs more than 500.
const products = [
  { name: "Bag", stock: 10, price: 600 },
  { name: "Shoes", stock: 5, price: 300 }
];

console.log( products.every((product)=>{ return product.stock>0}) && products.some((product)=>{ return product.price>500}) )