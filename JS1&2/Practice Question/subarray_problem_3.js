let arr=[-5 ,1 ,5 ,0 ,-7]
let sum=0;
let max=-Infinity
//let arr2=[0];
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i]
    //arr2.push(sum)
    if(sum>max)
    {
        max=sum;
    }
}
console.log(max)
//console.log(Math.max(...arr2))