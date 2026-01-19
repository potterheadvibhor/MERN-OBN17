let myset3=new Set();

myset3.add("j")
myset3.add("a")
myset3.add("i")
myset3.add("n")

console.log(myset3)

console.log(typeof((Array.from(myset3)).join("")))


//first method for looping over sets  by using for each
myset3.forEach((item)=>{
    console.log(item)
})

console.log(myset3.entries())   // entries create an [value,value] iterator from the set//[Set Entries] {
//   [ 'j', 'j' ],
//   [ 'a', 'a' ],
//   [ 'i', 'i' ],
//   [ 'n', 'n' ]
// }


// secound method by using .entries()
let Entries=myset3.entries()
for(let item of Entries)
{
  console.log(item)
}



// third method by using .values()

console.log(myset3.values())     // create an only value iterator  [Set Iterator] { 'j', 'a', 'i', 'n' } 
let Values=myset3.values();

for(let item of Values)
{
    console.log(item);
}


//we can also 

for(let item of myset3)
{
    console.log(item);
}
