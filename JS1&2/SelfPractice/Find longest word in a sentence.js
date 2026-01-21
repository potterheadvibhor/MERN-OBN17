let atr="I love javascript programming"
let str=atr.split(" ")
let max=-Infinity
let maxWord=""
for(let i=0;i<str.length;i++)
{

    if(str[i].length>max)
        {
            max=str[i].length
            maxWord=str[i]
        } 
}
console.log(maxWord)