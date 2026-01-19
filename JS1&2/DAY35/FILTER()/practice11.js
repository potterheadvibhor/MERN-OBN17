
const words = ["madam", "racecar", "hello", "level"];

console.log(words.filter((word)=>{ return (word=== (word.split("").reverse()).join(""))}))