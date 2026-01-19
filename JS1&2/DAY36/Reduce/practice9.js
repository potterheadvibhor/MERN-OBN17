let arr=[1, 2, 2, 3, 1, 1]

console.log(arr.reduce((m,x)=> {
     
    (m.has(x)?m.set(x,m.get(x)+1):m.set(x,1))
    return m;


},new Map()))