let arr=[1,2,3,4,3,5,3,6,3]
let key=3;
let count=0;
for(let i=0;i<arr.length;i++)
{
 if(arr[i]===key)
    {
count=i
    }      
}
console.log(count);
