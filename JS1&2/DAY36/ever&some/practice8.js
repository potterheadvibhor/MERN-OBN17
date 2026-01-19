//Check if every order is delivered AND some orders are delayed.
const orders = [
  { delivered: true, delayed: false },
  { delivered: true, delayed: false }
];

console.log(orders.every((order)=>{ return order.delivered==true}) && orders.some((order)=>{ return order.delayed==true}))