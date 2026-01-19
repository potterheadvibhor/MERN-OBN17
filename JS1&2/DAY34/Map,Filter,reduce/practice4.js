const prices =[100, 250, 400,9];


console.log(prices.map((price)=>
{
     return (((price*18)/100)+price)
}))

console.log(prices.sort())