let arr = [1, 2, 3, 1]
let target = 3

let count=0
for(let i=0;i<arr.length;i++)
{
    let sum=0
    for(let j=i;j<arr.length;j++)
    {

        sum+=arr[j]
   
       if(sum==target)
       {
        
        count++
       }
    }
}
console.log(count)