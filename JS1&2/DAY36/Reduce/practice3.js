console.log([1, 2, 3, 4, 6, 7, 8].reduce((accu,curr)=>{ return curr%2==0?accu+curr:accu+0},0))
