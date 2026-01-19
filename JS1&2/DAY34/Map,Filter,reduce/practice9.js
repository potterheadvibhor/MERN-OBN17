const products = [
{ name: "laptop", price: 50000},
{ name: "phone", price: 20000}
]

console.log(products.map((product)=>
{
     return {name:product.name.toUpperCase(),price:"₹"+product.price}
}))

console.log(products)



