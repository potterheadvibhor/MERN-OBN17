const products = [
{ name: "Laptop", inStock: true },
{ name: "Phone", inStock: false },
{ name: "Tablet", inStock: true }
];

console.log(products.filter((product)=>{ return product.inStock}))