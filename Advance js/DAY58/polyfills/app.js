// A polyfill is a piece of code (usually JavaScript) that implements a feature in older environments that do not natively support it.
// In simple words:
// If a browser does not support a modern JS feature, we write our own implementation of it.
if(!Array.prototype.hasOwnProperty("contains"))
{
    Array.prototype.contains=function(ele)
{
    for(let i=0;i<this.length;i++)
    {
        if(this[i]===ele)
        {
            return i
        }
    }
return -1
}
}

let arr=[1,2,3,4,4,5,6]
console.log(arr.contains(33))

Array.prototype.push=function(e)
{
 this.unshift(e)
}
arr.push(4)
console.log(arr)