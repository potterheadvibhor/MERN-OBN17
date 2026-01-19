let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];

let n=(arr.length)
let isEqual=true;
for(let row=0;row<arr.length;row++)
{
if(arr[row].length!=n)
{
isEqual=false
break;
}
}
console.log(isEqual?"Square Matrix":"Not A square Matrix")