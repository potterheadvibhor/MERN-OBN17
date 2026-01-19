let arr=["horse"
,"peter",
"jass"]
let i=0
while(i<arr.length)
{
    
    let str=arr[i];
   for(let i=0;i<str.length;i++)
{
if( "qwertyuiop".includes(str[i]))
{
   console.log(str)
   
}
// else if("asdfghjkl".includes(str[i]))
// {
//     console.log(str)
    
// }
// else if("zxcvbnm".includes(str))
// {
//     console.log(str[i])
    
// }
}
i++;
}