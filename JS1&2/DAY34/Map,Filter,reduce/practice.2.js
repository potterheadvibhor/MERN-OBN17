let charArr=["shubham","vibhor"]

console.log(charArr.map((value)=>
{
    
    return value[0].toUpperCase()+value.slice(1)
}))