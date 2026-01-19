function reverseWordWise(str)
{
    let strArr=str.split(" ")
let str2="";
for(let item of strArr.reverse())
{
   str2+=item+" "
}
return str2;
}
console.log(reverseWordWise("how are you"));