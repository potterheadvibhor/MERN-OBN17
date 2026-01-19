//Check if all strings are non-empty AND some strings are longer than 5 characters.
const arr = [0, "banana", "kiwi"];

console.log(arr.every((value)=>{ return typeof value==="string"}) && arr.some((value)=>{ return value.length>5}))