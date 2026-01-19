let p=10000;
let r=10;
let t=5

let si=(p*r*t)/100;

console.log("Simple interest",si);

let amt=p*(1+(r/100))**t;

console.log("amount",amt);

let ci=amt-p;

console.log("ci",ci);
