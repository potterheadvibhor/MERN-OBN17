//nested array array inside arra
//array are hetrogenious

// let arr=[[1,2,3],[4,5,6]]
// console.log(arr[1][1])

//flattning an array

//console.log(arr.flat());

let arr2=[[1,2,3],[4,5,6,[7,8]]]
console.log(arr2.flat());    //flat only remove single level of indexing if not specified
console.log(arr2.flat(2));    //flat  remove given level of depth
console.log(arr2.flat(Infinity));    //this can flat nay depth of th array
console.log((arr2.flat()).flat());
console.log(arr2);


